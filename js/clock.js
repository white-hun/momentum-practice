const day = document.querySelector("h2#day");
const clock = document.querySelector("h2#clock");

function getDay() {
  const dates = new Date();
  const month = String(dates.getMonth()).padStart(2, "0");
  const ddate = String(dates.getDate()).padStart(2, "0");
  const days = dates.getDay();
  day.innerText = `${month}.${ddate}.${days}`;
}

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
getDay();
