import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

export function calculateDuration(
  startDateString: string,
  endDateString: string,
): string {
  dayjs.extend(customParseFormat);
  const startDate = dayjs(startDateString, "MM/YYYY");
  const endDate = dayjs(
    endDateString.length > 0 ? endDateString : dayjs(),
    "MM/YYYY",
  );

  const yearsDiff = endDate.diff(startDate, "year");
  const monthsDiff = endDate.diff(startDate, "month");

  if (monthsDiff % 12 === 0 && yearsDiff !== 0) {
    return `${yearsDiff} year/s`;
  } else if (monthsDiff % 12 !== 0 && yearsDiff === 0) {
    return `${monthsDiff} month/s`;
  }
  return `${yearsDiff} year/s, ${monthsDiff % 12} month/s`;
}
