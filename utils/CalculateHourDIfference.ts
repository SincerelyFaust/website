import dayjs from "dayjs";
import { getTime } from "./GetTime";

export function calculateHourDifference() {
  const clientTime = dayjs();
  const localTime = dayjs(getTime());
  const timeDiff = localTime.diff(clientTime, "hour");

  if (timeDiff < 0) {
    return `(${timeDiff} hours behind you)`;
  } else if (timeDiff === 0) {
    return "(Same time as you)";
  }
  return `(${timeDiff} hours ahead of you)`;
}
