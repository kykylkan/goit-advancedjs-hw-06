enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}