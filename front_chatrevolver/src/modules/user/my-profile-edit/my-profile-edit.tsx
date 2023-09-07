import React, { useEffect } from "react";
import { Field } from "./field";
import { DateInput, SelectInput, TextArea, TextInput } from "./inputs";

import styles from "./my-profile-edit.module.scss";
import { countryOptions, useAppForm } from "shared/lib";
import { api, UpdateProfileDTO } from "shared/api";
import { Button } from "shared/ui";
import AppRouter from "router";
import { useIntl } from "react-intl";

export interface IMyProfileEdit {}

export const MyProfileEdit = (props: IMyProfileEdit) => {
  const profile = api.user.useGetMe();

  const form = useAppForm<Omit<UpdateProfileDTO, "tags"> & { tags: string }>({
    onSubmit(values) {
      return api.user.updateProfile({
        ...values,
        birthday: !!values.birthday?.getTime() ? values.birthday : undefined,
        tags: values.tags
          .replace(/\s+/g, " ")
          .split(" ")
          .filter((it) => it),
      });
    },
    onSuccess: async () => {
      await profile.mutate();
      await AppRouter.profile.open();
    },
  });

  useEffect(() => {
    const values = profile.data;
    if (!values) return;

    form.setValue("name", values.name);
    form.setValue("birthday", values.birthday?.toISOString().substr(0, 10) as any);
    form.setValue("sex", values.sex as any);
    form.setValue("country", values.country);
    form.setValue("city", values.city);
    form.setValue("tags", values.tags?.join(" ") || "");
    form.setValue("description", values.description);
  }, [profile.data]);

  const intl = useIntl();

  return (
    <form className={styles.my_profile_edit} onSubmit={form.onSubmit}>
      <h1>
        {intl.formatMessage({
          id: "user.profile_edit.title",
          defaultMessage: "Profile editing",
        })}
      </h1>

      <Field
        label={intl.formatMessage({
          id: "input.username",
          defaultMessage: "Username (Max 10 symbols)",
        })}
      >
        <TextInput {...form.register("name")} />
      </Field>

      <div className={styles.divider} />

      <Field
        label={intl.formatMessage({
          id: "input.birthday",
          defaultMessage: "birthday",
        })}
      >
        <DateInput {...form.register("birthday", { valueAsDate: true, required: false })} />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "input.gender",
          defaultMessage: "Gender",
        })}
      >
        <SelectInput
          options={[
            {
              value: "MALE",
              label: intl.formatMessage({
                id: "input.gender.male",
                defaultMessage: "Мужчина",
              }),
            },
            {
              value: "FEMALE",
              label: intl.formatMessage({
                id: "input.gender.female",
                defaultMessage: "Женщина",
              }),
            },
            {
              value: "UNDEF",
              label: intl.formatMessage({
                id: "input.gender.undef",
                defaultMessage: "Не указано",
              }),
            },
          ]}
          {...form.register("sex", { required: false })}
        />
      </Field>

      <div className={styles.divider} />

      <Field
        label={intl.formatMessage({
          id: "input.country",
          defaultMessage: "Country",
        })}
      >
        <SelectInput options={countryOptions} {...form.register("country", { required: false })} />
      </Field>
      <Field
        label={intl.formatMessage({
          id: "input.city",
          defaultMessage: "City",
        })}
      >
        <TextInput {...form.register("city", { required: false })} />
      </Field>

      <div className={styles.divider} />

      <Field
        label={intl.formatMessage({
          id: "input.tags",
          defaultMessage: "Tags",
        })}
      >
        <TextArea rows={3} {...form.register("tags", { required: false })} />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "input.about_me",
          defaultMessage: "About me",
        })}
      >
        <TextArea rows={6} {...form.register("description", { required: false })} />
      </Field>

      <div className={styles.divider} />

      <Field>
        <Button type="primary" htmlType="submit" loading={form.submitProps.loading}>
          {intl.formatMessage({
            id: "user.profile_edit.submit",
            defaultMessage: "Save",
          })}
        </Button>
      </Field>
    </form>
  );
};

MyProfileEdit.defaultProps = {};
