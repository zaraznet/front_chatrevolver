import React from "react";
import { countryOptions } from "shared/lib";
import { DatingFilterField } from "./field";
import { DatingSelectInput } from "./select";
import { DatingFilterCheckbox } from "./checkbox";
import { DatingRangeInput } from "./range";
import { IDatingFilters } from "modules/dating";

import styles from "./dating-filter.module.scss";
import { useIntl } from "react-intl";

const Field = DatingFilterField;
const Select = DatingSelectInput;
const Checkbox = DatingFilterCheckbox;
const Range = DatingRangeInput;

export interface IDatingFilter {
  value: Partial<IDatingFilters>;
  onChange: (value: Partial<IDatingFilters>) => void;
}

export const DatingFilter = (props: IDatingFilter) => {
  const { value, onChange } = props;

  const intl = useIntl();

  return (
    <div className={styles.dating_filter}>
      <Field
        label={intl.formatMessage({
          id: "dating.filter.country",
          defaultMessage: "Country",
        })}
        style={{ minWidth: 300 }}
      >
        <Select
          value={value.country}
          onChange={(e) => onChange({ country: e.target.value })}
          options={countryOptions}
          placeholder={intl.formatMessage({
            id: "input.select.any",
            defaultMessage: "Any",
          })}
          allowEmpty
        />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "dating.filter.gender",
          defaultMessage: "Gender",
        })}
        style={{ minWidth: 124 }}
      >
        <Select
          value={value.sex}
          onChange={(e) => onChange({ sex: e.target.value as any })}
          options={[
            {
              value: "UNDEF",
              label: intl.formatMessage({
                id: "gender.undef",
                defaultMessage: "Any",
              }),
            },
            {
              value: "FEMALE",
              label: intl.formatMessage({
                id: "gender.female",
                defaultMessage: "Woman",
              }),
            },
            {
              value: "MALE",
              label: intl.formatMessage({
                id: "gender.male",
                defaultMessage: "Man",
              }),
            },
          ]}
        />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "dating.filter.location",
          defaultMessage: "Location",
        })}
        style={{ minWidth: 235 }}
      >
        <Select
          value={value.near ? "near" : "any"}
          onChange={(e) => onChange({ near: e.target.value === "near" })}
          options={[
            {
              value: "near",
              label: intl.formatMessage({
                id: "dating.filter.location.near",
                defaultMessage: "The Closest of All",
              }),
            },
            {
              value: "any",
              label: intl.formatMessage({
                id: "dating.filter.location.any",
                defaultMessage: "Any",
              }),
            },
          ]}
        />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "dating.filter.rating",
          defaultMessage: "Rating",
        })}
        style={{ minWidth: 300 }}
      >
        <Select
          value={value.highRating ? "HIGH" : "ANY"}
          onChange={(e) => onChange({ highRating: e.target.value === "HIGH" })}
          options={[
            {
              value: "HIGH",
              label: intl.formatMessage({
                id: "dating.filter.rating.high",
                defaultMessage: "Only with a High Rating",
              }),
            },
            {
              value: "any",
              label: intl.formatMessage({
                id: "dating.filter.rating.any",
                defaultMessage: "Any Rating",
              }),
            },
          ]}
        />
      </Field>

      <Field
        label={intl.formatMessage({
          id: "dating.filter.age",
          defaultMessage: "Age",
        })}
        className={styles.age}
      >
        <Range
          value={{
            from: value.ageFrom,
            to: value.ageTo,
          }}
          onChange={(age) => onChange({ ageFrom: age?.from, ageTo: age?.to })}
        />
      </Field>

      <div className={styles.checkboxes}>
        <Checkbox checked={value.withPhotos} onChange={(e) => onChange({ withPhotos: e.target.checked })}>
          {intl.formatMessage({
            id: "dating.filter.with_photos",
            defaultMessage: "With photos",
          })}
        </Checkbox>
        <Checkbox checked={value.onlyVip} onChange={(e) => onChange({ onlyVip: e.target.checked })}>
          {intl.formatMessage({
            id: "dating.filter.only_vip",
            defaultMessage: "Only VIP",
          })}
        </Checkbox>
        <Checkbox checked={value.online} onChange={(e) => onChange({ online: e.target.checked })}>
          {intl.formatMessage({
            id: "dating.filter.online",
            defaultMessage: "Online",
          })}
        </Checkbox>
      </div>
    </div>
  );
};

DatingFilter.defaultProps = {};
