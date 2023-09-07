import { useEffect, useState } from "react";
import { api, SearchPreference } from "shared/api";

export interface IDatingFilters extends SearchPreference {
  online?: boolean;
}

export const useDatingFilter = (): [Partial<IDatingFilters>, (value: Partial<IDatingFilters>) => void] => {
  const preferences = api.user.useUserSearchPreferences();

  const [_state, _setState] = useState<Partial<IDatingFilters>>();

  const state = { ...preferences.data, ..._state };
  const setState = (value: Partial<IDatingFilters>) => {
    _setState((state) => ({ ...state, ...value }));
  };

  useEffect(() => {
    if (preferences.data && _state) {
      const data = { ...preferences.data, ..._state };
      api.user.userUpdateSearchPreferences(data);
      preferences.mutate(data, false);
    }
  }, [preferences.data, _state]);

  return [state, setState];
};
