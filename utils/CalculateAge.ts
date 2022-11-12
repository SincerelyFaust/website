import dayjs from "dayjs";

export function calculateAge(birthDateString: string): number {
  const todayDate = dayjs();
  const birthDate = dayjs(birthDateString);

  return todayDate.diff(birthDate, "year");
}
