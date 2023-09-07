import { countryList } from "shared/lib/country-list";

export const formatCountryAndCity = (data?: Partial<{ country: string; city: string }>) => {
  const country = countryList.find((it) => it.code === data?.country)?.name;
  const city = data?.city;

  return [country, city].filter((it) => it).join(", ");
};
