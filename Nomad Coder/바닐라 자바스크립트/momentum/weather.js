const API_KEY = "3c8e45ea5f21d7681218b86b891d1ad3";
const COORDS = "coords";
const tempCity = document.querySelector(".js-weather");

// 날씨 불러오기
function getWeather(lat, lon) {
  // 날씨 API를 따와지면
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function (response) {
    return response.json();
    // 응답의 json 형태로 리턴하기
  }).then(function (json) {
    // 리턴이 성공적이면 json 파일의 이름(지역)과 온도 불러오기
    const place = json.name;
    const temp = json.main.temp;
    // 불러온 온도와 이름으로 .js에 글씨 쓰기
    tempCity.innerText = `${temp}° | ${place}`;
    // 글씨 쓰고 엔터 쳐주기
    tempCity.append(document.createElement("br"));
  });
}

// 로컬 스토리지에 객체를 스트링화 해서 저장하기
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위경도를 불러오면 위경도를 저장하기
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // 객체화 하기
  const coordsObj = {
    latitude,
    longitude
  };
  // 로컬에 저장하기
  saveCoords(coordsObj);
}

// 위경도를 못불러 오면 콘솔에 출력하기
function handleGeoError() {
  console.log("Can't access geolocation");
}

// 위경도 물어보기
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// 날씨 위젯 실행하기
function loadCoords() {
  // 로컬 스토리지에 위경도가 불러오기
  const loadedCoords = localStorage.getItem(COORDS);
  // 없으면 위경도 물어보기
  if (loadedCoords === null) {
    askForCoords();
  }
  // 있으면 위경도 불러와서 날씨 불러오기
  else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
