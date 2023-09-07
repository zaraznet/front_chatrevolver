import React, { useState } from "react";
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseControllerProps,
  useForm,
  UseFormProps,
  UseFormRegisterReturn,
  UseFormReturn,
  UseFormRegister,
} from "react-hook-form";
import applyBackendErrors from "./applyBackendErrors";

export interface IUseAppFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
  TResponse extends any = void
> extends UseFormProps<TFieldValues, TContext> {
  onSubmit: (value: TFieldValues) => Promise<TResponse> | TResponse;
  onSuccess?: (resp: TResponse, values: TFieldValues) => void;
}

export type UseAppFormRegister<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  name: TFieldName,
  options?: RegisterOptions<TFieldValues, TFieldName>
) => UseFormRegisterReturn<any> & { error?: string };

export interface IUseAppForm<TFieldValues extends FieldValues = FieldValues> extends UseFormReturn<TFieldValues> {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  globalError?: string;
  setGlobalError: (message?: string) => void;
  cleanGlobalError: () => void;
  submitProps: { loading: boolean; disabled: boolean };
  register: UseAppFormRegister<TFieldValues>;
  regField: <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
    name: TFieldName,
    rules?: Omit<RegisterOptions<TFieldValues, TFieldName>, "valueAsNumber" | "valueAsDate" | "setValueAs">
  ) => UseControllerProps<TFieldValues, TFieldName>;
}

export const useAppForm = <
  TFieldValues extends FieldValues = FieldValues,
  TResponse extends any = any,
  TContext extends object = object
>(
  props: IUseAppFormProps<TFieldValues, TContext, TResponse>
): IUseAppForm<TFieldValues> => {
  const form = useForm<TFieldValues, TContext>(props);

  const [globalError, setGlobalError] = useState<string>();
  const cleanGlobalError = () => setGlobalError(undefined);

  // useEffect(() => {
  //   form.trigger();
  // }, []);

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      const resp = await props.onSubmit(values as any);
      await props.onSuccess?.(resp, values as any);
      cleanGlobalError();
    } catch (e) {
      try {
        console.error(e);
        const response = await (e as any).json();

        if (response?.fields) {
          applyBackendErrors<TFieldValues>(response?.fields, form.setError);
        }

        if (response?.message) {
          setGlobalError(response?.message);
        }
      } catch (e) {
        console.error(e);
      }
    }
  });

  const submitProps = {
    loading: form.formState.isSubmitting,
    disabled: !form.formState.isValid,
  };

  const register = (name: FieldPath<TFieldValues>, options: any) => ({
    ...form.register(name, { required: true, ...options }),
    error: (form.formState.errors as any)?.[name]?.message || (form.formState.errors as any)?.[name]?.type,
  });

  const reg = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
    name: TFieldName,
    rules?: Omit<RegisterOptions<TFieldValues, TFieldName>, "valueAsNumber" | "valueAsDate" | "setValueAs">
  ): UseControllerProps<TFieldValues, TFieldName> => {
    return {
      name: name,
      control: form.control,
      rules: {
        required: true,
        ...rules,
      },
    };
  };

  return {
    ...form,
    onSubmit,
    globalError,
    setGlobalError,
    cleanGlobalError,
    submitProps,
    register,
    regField: reg,
  };
};
