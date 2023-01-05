export function getTime() {
  const options: Intl.DateTimeFormatOptions = {
      timeZone: "Europe/Zagreb",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
      weekday: "long",
    },
    formatter = new Intl.DateTimeFormat(["en-GB"], options);

  return formatter.format(new Date());
}
