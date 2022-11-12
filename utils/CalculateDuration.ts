import dayjs from "dayjs";

export function calculateDuration(
  startDateString: string,
  endDateString: string,
): string {
  const startDate = dayjs(startDateString);
  const endDate = dayjs(endDateString.length > 0 ? endDateString : undefined);

  const yearsDiff = endDate.diff(startDate, "year");
  const monthsDiff = endDate.diff(startDate, "month");

  if (monthsDiff % 12 === 0 && yearsDiff !== 0) {
    return `${yearsDiff} year/s`;
  } else if (monthsDiff % 12 !== 0 && yearsDiff === 0) {
    return `${monthsDiff} month/s`;
  }
  return `${yearsDiff} year/s, ${monthsDiff % 12} month/s`;
}
