import dayjs from "dayjs";
import { getTime } from "./GetTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

export function calculateHourDifference() {
  dayjs.extend(customParseFormat);
  const clientTime = dayjs(dayjs(), "DD/MM/YYYY HH:mm", "gb");
  const localTime = dayjs(getTime(), "DD/MM/YYYY HH:mm", "gb");
  const timeDiff = clientTime.diff(localTime, "hour");

  if (timeDiff < 0) {
    return `(${timeDiff.toString().replace("-", "")} hours behind you)`;
  } else if (timeDiff === 0) {
    return "(Same time as you)";
  }
  return `(${timeDiff} hours ahead of you)`;
}
