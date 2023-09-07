import { FieldValues, Path, UseFormReturn, UseFormSetError } from "react-hook-form";
import { apiError } from "./apiError";

/**
 *
 * @param errors : { fieldName: errorCode }
 * @param setError
 */
export default function applyBackendErrors<T extends FieldValues>(errors: { [key: string]: string }, setError: UseFormSetError<T>) {
  Object.entries(errors).forEach(([key, value]) => {
    const err = apiError(value) as any;
    setError(key as Path<T>, { message: err, type: "manual" });
  });
}

export function handleSubmit<T extends FieldValues = FieldValues>(form: UseFormReturn<T>, submit: (values: T) => void) {
  return form.handleSubmit(async (values) => {
    try {
      await submit(values as any);
    } catch (e: any) {
      try {
        const response = await e.json();
        applyBackendErrors<T>(response?.fields, form.setError);
      } catch (e) {
        console.error(e);
      }
    }
  });
}
