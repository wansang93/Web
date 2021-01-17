// form: .js-form을 가져오기
// input: form 아래 있는 input 가져오기
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

// User_LS: user last state(?)
// SHOWING_CN: showing class name
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// 6. localStorage에 이름을 저장하기
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// 4. 엔터 이벤트 발생
function handleSubmit(event) {
  // ** 이벤트 발생시 root -> form -> document 영향을 미침
  // 자동으로 위에 영향을 미치는데 이 기본동작을 방지
  event.preventDefault();
  // 입력 값을 currentValue에 저장 
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 3. 이름 물어보기
function askForName() {
  // 상자 보여주기
  form.classList.add(SHOWING_CN);
  // 상자가 입력되면(enter 치면) handleSubmit 실행하기
  form.addEventListener("submit", handleSubmit);
}

// 5. localStorage에 이름 출력하기
function paintGreeting(text) {
  // form에 있는 상자 지우기
  form.classList.remove(SHOWING_CN);
  // greeting에 있는 상자 보이기
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// 2. localStorage에 값(이름)이 있는지 체크
function loadName() {
  // ** localStorage에 이름 가져오기
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // localStorage에 없으면
    askForName();
  } else {
    // 5. localStorage에 있으면 출력
    paintGreeting(currentUser);
  }
}

// 1. init 설정하고 실행하기
function init() {
  loadName();
}

init();
