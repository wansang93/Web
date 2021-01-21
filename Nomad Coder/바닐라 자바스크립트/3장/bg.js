const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(imgNumber) {
  const image = new Image();
  // 이미지 src 부르기
  image.src = `images/${imgNumber + 1}.jpg`;
  // 이미지에 classList 추가하기(css 설정을 위해서)
  image.classList.add("bgImage");
  // inserts a set of Node objects or DOMString objects before the first child of the ParentNode
  // append는 자식 노드의 제일 뒤에, prepend는 자식 노드의 제일 앞쪽에
  body.prepend(image);
}

// 랜덤한 숫자를 불러오기
function genRandom() {
  // int((0~1) * IMG_NUMBER)
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
