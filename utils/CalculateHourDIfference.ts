import dayjs from "dayjs";
import { GetTime } from "./GetTime";

export function CalculateHourDifference() {
  const clientTime = dayjs();
  const localTime = dayjs(GetTime());
  const timeDiff = localTime.diff(clientTime, "hour");

  if (timeDiff < 0) {
    return `(${timeDiff} hours behind you)`;
  } else if (timeDiff === 0) {
    return "(Same time as you)";
  }
  return `(${timeDiff} hours ahead of you)`;
}
