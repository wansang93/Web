// clockContainer: .js-clock을 가져와서 변수로 만들기
// clockTitle: .js-clock 아래에 h1을 들고와서 변수로 만들기
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");


function getTime() {
  // 날짜 객체 만들기
  const date = new Date();
  // 시, 분, 초 만들기
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // ** clockTitle에 innerText로 현재 시간으로 수정하기
  clockTitle.innerText =
    `${hours < 10 ? `0${hours}` : hours}:` +
    `${minutes < 10 ? `0${minutes}` : minutes}:` +
    `${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 언제나 init 만들고 시작하면 좋음
function init() {
  getTime();
  // ** getTime을 매번 갱신하기 1000ms마다
  setInterval(getTime, 1000);
}

init();
