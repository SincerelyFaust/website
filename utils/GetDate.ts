import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

export function getDate(
  startDateString: string,
  endDateString: string,
): string {
  dayjs.extend(customParseFormat);
  const startDate = dayjs(startDateString, "MM/YYYY").toDate();
  const endDate = dayjs(endDateString, "MM/YYYY").toDate();

  if (endDateString.length > 0) {
    return `${startDate.toLocaleString("en-GB", {
      month: "long",
      year: "numeric",
    })} - ${endDate.toLocaleString("en-GB", {
      month: "long",
      year: "numeric",
    })}`;
  }
  return `${startDate.toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  })} - Present`;
}
