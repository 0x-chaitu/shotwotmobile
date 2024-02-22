export const CountDaysLeft = (time: any) => {
    const date = new Date(time);
  const expiry = date.getTime();
  var dateNow = new Date();
  const now = dateNow.getTime();

  var delta = Math.abs(expiry - now) / 1000;
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  var hours = Math.floor(delta / 3600) % 24;
    if (hours > 12) {days++}

  return `${days}days`
}