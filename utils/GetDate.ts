export function getDate(
  startDateString: string,
  endDateString: string,
): string {
  const startDate = new Date(startDateString).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDate = new Date(endDateString).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  if (endDateString.length > 0) {
    return `${startDate} - ${endDate}`;
  }
  return `${startDate} - Present`;
}
