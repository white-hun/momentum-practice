// const API_KEY = "f5ed3816a360c1cc9e661aa0630bcb15";

// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       const weather = document.querySelector("#weather span:first-child");
//       const city = document.querySelector("#weather span:last-child");
//       city.innerText = data.name;
//       weather.innerText = `${data.weather[0].main} | ${data.main.temp.toFixed(
//         1
//       )}℃`;
//     });
// }
// function onGeoError() {
//   alert("xxx");
// }
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
const API_KEY = "f5ed3816a360c1cc9e661aa0630bcb15";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  /  ${data.main.temp.toFixed(
        1
      )}℃`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
