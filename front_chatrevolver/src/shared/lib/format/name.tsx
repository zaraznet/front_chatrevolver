export const formatName = (data?: Partial<{ id: number; name: string; deleted: boolean; blocked: boolean }>) => {
  if (!data) return "";

  if (data.deleted) {
    return "DELETED";
  }

  let name = data.name;

  if (!name && data.id) {
    name = "User" + data.id;
  }

  return name;
};
