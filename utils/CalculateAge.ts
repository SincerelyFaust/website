import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

export function calculateAge(birthDateString: string): number {
  dayjs.extend(customParseFormat);
  const todayDate = dayjs(dayjs(), "DD/MM/YYYY");
  const birthDate = dayjs(birthDateString, "DD/MM/YYYY");

  return todayDate.diff(birthDate, "year");
}
