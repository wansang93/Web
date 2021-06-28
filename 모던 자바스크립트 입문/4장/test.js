function f() {
    console.log(a);  // undefined
    var a = 'local';
    console.log(a); // local
    return a;
}

function setBallProperties(x, y, vx, vy, radius) {
  // ...
  console.log(x, y, vx, vy, radius)
}

// 보통 방식으로 적으면 함수 호출 시 인수가 많아지면 햇갈림
setBallProperties(0, 0, 10, 15, 5);

// 이렇게 적으면 elegant하게 전달하는 방법
var parameters = {
  x: 0,
  y: 0,
  vx: 10,
  vy: 15,
  radius: 5,
  color: 'blue'
}

setBallProperties(parameters)


var square = function(x) {return x * x};
square(5)  // 25


var circle = {
  center: {x: 1.0, y: 2.0},
  radius: 2.5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  }
}

circle.area()  // 19.634954084936208

circle.translate = function (a, b) {
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
}

circle.translate(1, 2)
circle.center  // {x: 2, y: 4}

function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function() {
      return Math.PI * this.radius * this.radius;
  };
}

var p = {x: 0, y: 0};
var c = new Circle(p, 2.0);
console.log(`넓이 = ${c.area()}`)
