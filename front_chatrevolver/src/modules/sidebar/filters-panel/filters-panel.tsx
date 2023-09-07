import React, { useEffect, useState } from "react";
import { Radio, Range, SidebarPanel } from "shared/ui";
import { api, QueuePreferenceDTO } from "shared/api";
import { useIntl } from "react-intl";

export interface IFiltersPanel {
  onClose: () => void;
}

export const FiltersPanel = (props: IFiltersPanel) => {
  const filters = api.user.useQueuePreferences();

  const [_state, _setState] = useState<Partial<QueuePreferenceDTO>>();
  const state = { ...filters.data, ..._state };

  const setState = (value: Partial<QueuePreferenceDTO>) => {
    _setState((state) => ({ ...state, ...value }));
  };

  useEffect(() => {
    if (filters.data && _state) {
      const data = { ...filters.data, ..._state };
      api.user.updateQueuePreferences(data);
      filters.mutate(data, false);
    }
  }, [filters.data, _state]);

  const intl = useIntl();

  return (
    <SidebarPanel onClose={props.onClose}>
      <h2>
        {intl.formatMessage({
          id: "dating.filter.title",
          defaultMessage: "Search Filter",
        })}
      </h2>

      <h3>
        {intl.formatMessage({
          id: "dating.filter.gender",
          defaultMessage: "Gender",
        })}
        :
      </h3>
      <Radio
        value={state.sex}
        onChange={(value) => setState({ sex: value as any })}
        options={[
          {
            value: "MALE",
            label: intl.formatMessage({
              id: "gender.male",
              defaultMessage: "Man",
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
            value: "UNDEF",
            label: intl.formatMessage({
              id: "gender.undef",
              defaultMessage: "Any",
            }),
          },
        ]}
      />

      <h3>
        {intl.formatMessage({
          id: "dating.filter.age",
          defaultMessage: "Age",
        })}
        :
      </h3>
      <Range
        value={{
          from: state.ageFrom,
          to: state.ageTo,
        }}
        onChange={(value) => setState({ ageFrom: value?.from, ageTo: value?.to })}
      />

      <h3>
        {intl.formatMessage({
          id: "dating.filter.location",
          defaultMessage: "Location",
        })}
        :
      </h3>
      <Radio
        value={state.near}
        onChange={(near) => setState({ near })}
        options={[
          {
            value: true,
            label: intl.formatMessage({
              id: "dating.filter.location.near",
              defaultMessage: "The Closest of All",
            }),
          },
          {
            value: false,
            label: intl.formatMessage({
              id: "dating.filter.location.any",
              defaultMessage: "Any",
            }),
          },
        ]}
      />

      <h3>
        {intl.formatMessage({
          id: "dating.filter.rating",
          defaultMessage: "Rating",
        })}
        :
      </h3>
      <Radio
        value={state.highRating}
        onChange={(highRating) => setState({ highRating })}
        options={[
          {
            value: true,
            label: intl.formatMessage({
              id: "dating.filter.rating.high",
              defaultMessage: "Only with a High Rating",
            }),
          },
          {
            value: false,
            label: intl.formatMessage({
              id: "dating.filter.rating.any",
              defaultMessage: "Any Rating",
            }),
          },
        ]}
      />
    </SidebarPanel>
  );
};

FiltersPanel.defaultProps = {};
