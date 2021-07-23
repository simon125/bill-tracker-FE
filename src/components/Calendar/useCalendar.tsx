export const useCalendar = (date: string | undefined = undefined) => {
  const dateToProcess =
    date !== undefined ? new Date(date as string) : new Date();
  const year = dateToProcess.getFullYear();
  const month = dateToProcess.getMonth();
  /* month + 1 for proper format (0-11 => 1-12) */
  const days = new Date(year, month + 1, 0).getDate();
  const numberOfFirstDay = new Date(year, month).getDay();
  /* 0 - Sunday, 1 - Monady, ..., 6 - Saturday */
  const blankDays = numberOfFirstDay === 0 ? 6 : numberOfFirstDay - 1;

  return { days, blankDays };
};
