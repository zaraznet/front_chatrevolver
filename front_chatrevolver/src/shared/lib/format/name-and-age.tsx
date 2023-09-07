import { formatName } from "shared/lib/format/name";

export const formatNameAndAge = (
  data?: Partial<{ id: number; name: string; birthday: Date; deleted: boolean; blocked: boolean }>
) => {
  if (!data) return "";

  if (data.deleted) {
    return "DELETED";
  }

  const name = formatName(data);

  if (data.birthday) {
    const age = Number(new Date(new Date().getTime() - data.birthday.getTime()).toISOString().slice(0, 4)) - 1970;

    return `${name}, ${age}`;
  }

  return name;
};
