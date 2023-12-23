const svg_moon = document.querySelector(".svg__moon");
const svg_sun = document.querySelector(".svg__sun");
const daynight = document.querySelector(".daynight");
const body = document.querySelector("body");
daynight.addEventListener("click", function (e) {
  e.preventDefault();
  if (svg_sun.classList.contains("show")) {
    body.style.backgroundColor = "white";
    body.style.Color = "black";
    svg_sun.classList.remove("show");
    svg_moon.classList.add("show");
  } else {
    body.style.backgroundColor = "black";
    body.style.Color = "rgb(21, 42, 60)";
    svg_moon.classList.remove("show");
    svg_sun.classList.add("show");
  }
});

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
