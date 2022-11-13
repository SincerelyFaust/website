import { siteConfig } from "../config";
import cityTimezones from "city-timezones";

export function getTime() {
  const options: Intl.DateTimeFormatOptions = {
      timeZone: cityTimezones.lookupViaCity(siteConfig.location.city).at(0)
        ?.timezone,
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      weekday: "long",
    },
    formatter = new Intl.DateTimeFormat(["en-US"], options);

  return formatter.format(new Date());
}
