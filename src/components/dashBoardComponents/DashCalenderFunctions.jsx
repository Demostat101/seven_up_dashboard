import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  /* Prefix date */

  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    arrayOfDate.push({ currentMonth: false, date: firstDayOfMonth.day(i) });
  }

  /* Generate current day */

  for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
    arrayOfDate.push({
      currentMonth: true,
      date: firstDayOfMonth.date(i),
      today:
        firstDayOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remaining = 42 - arrayOfDate.length;

  for (
    let i = lastDayOfMonth.date() + 1;
    i <= lastDayOfMonth.date() + remaining;
    i++
  ) {
    arrayOfDate.push({ currentMonth: false, date: lastDayOfMonth.date(i) });
  }

  return arrayOfDate;
};
