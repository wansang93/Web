const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  // event가 발생한 btn
  const btn = event.target;
  // btn의 parentNode (li)
  const li = btn.parentNode;
  // ls 삭제하기
  // delete child element mdn 으로 검색해서 찾음
  toDoList.removeChild(li);
  // ** toDos의 메모리에 parseInt가 없는 toDo.id를 지운 것
  const cleanToDos = toDos.filter(function (toDo) {
    // li.id를 숫자로 바꾸고 toDo의 id가 없으면 삭제한 todo 리스트를 반환한 것을 메모리에 넣음 
    return toDo.id !== parseInt(li.id);
  });
  // todos 초기화 후 로컬에 저장
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
    // JS는 storage에 string 밖에 못넣음
    // 그래서 todos의 obj 형태를 `키: 태그` 형식의 string으로 넣어야 함
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// paint todo
function paintToDo(text) {
  // ** html 태그 만들기
  // span(meanless, for text) tag 만들기
  // sapn 태그 안의 텍스트: text로 받음
  const span = document.createElement("span");
  span.innerText = text;
  // delete 버튼 tag 만들기
  // delete 버튼 태그 안의 텍스트: X로 설정
  // delete 버튼 클릭 event 듣기
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  // li tag 만들기, 위에 2개 버튼 자식으로 하기
  const li = document.createElement("li");
  li.appendChild(span);
  li.appendChild(delBtn);
  // 새 아이디 = todo 길이 + 1(나중에 지울 때 필요)
  // li의 id에 새 아이디를 할당
  const newId = toDos.length + 1;
  li.id = newId;
  // ul(toDoList) tage에 자식으로 li tag 추가하기
  toDoList.appendChild(li);
  // 받은 text의 id를 부여해서 obj로 만들기
  const toDoObj = {
    text: text,
    id: newId,
  };
  // toDos에 todoObj 추가
  toDos.push(toDoObj);

  // todo 저장하기
  saveToDos();
}

// todo가 입력되면 실행
function handleSubmit(event) {
  // 기본 event 처리 방식 방지
  event.preventDefault();
  // todoInput의 value 값을 받음
  const currentValue = toDoInput.value;
  // 받은 value 값을 프린트 하기
  paintToDo(currentValue);
  // todoInput 초기화 하기
  toDoInput.value = "";
}

// 1. Todo Load 하기
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // localStorage에 있으면
  if (loadedToDos !== null) {
    // ** loadedToDos를 JSON.parse를 함(리스트로 감싼 str 형태를 리스트로 감싼 obj 형태로 바꿔줌)
    const parsedToDos = JSON.parse(loadedToDos);
    // parseed 한 todo(리스트 안의 obj형태) 각각에 printToDo를 실행해라(이때는 forEach는 array 함수)
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  // 1. Todo Load 하기
  loadToDos();
  // 2. toDoForm에서 이벤트를 받으면 실행
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
