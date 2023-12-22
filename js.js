setInterval(function () {
  document.querySelector(".time").textContent = new Intl.DateTimeFormat(
    "fa-IR",
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }
  ).format(new Date());
}, 1);
setInterval(function () {
  document.querySelector(".date").textContent = new Intl.DateTimeFormat(
    "fa-IR",
    {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      month: "long",
    }
  ).format(new Date());
}, 1);
