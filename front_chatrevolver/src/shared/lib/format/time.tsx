export const formatTime = (date: number) =>
  new Intl.DateTimeFormat("ru", { hour: "2-digit", minute: "2-digit" }).format(new Date(date));
