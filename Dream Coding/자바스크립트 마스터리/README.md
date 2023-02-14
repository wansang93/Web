# 자바스크립트 마스터리

- 23-01-19 ~

## 2. What is JS?

### 2-2. JS Engine by Browser

- V8: Chrome, NodeJS, Edge, Opera ✨
- Chakra: Internet Explorer 💩
- SpiderMonkey: Firefox
- JavaScriptCore: Safari

### 2-3. What is ECMAScript?

- [WIKI ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
- [ES6 compatibility table](https://kangax.github.io/compat-table/es6/)

## 3. Setting the Development Environment

### Install Nodemon

노드몬을 설치하면 코드 수정시 바로바로 콘솔에서 다시 시작해줌

1. 해당 루트 폴더에서 nodemon 설치

    ```bash
    npm install nodemon
    ```

2. `package.json`에서 `scripts` 부분 추가

    ```json
    {
      "scripts": {
        "start": "node start.js",
        "dev": "nodemon start.js"
      },
      "dependencies": {
        "nodemon": "^2.0.20"
        }
    }
    ```

3. terminal에서

    ```bash
    # 1. package.json의 모듈들 설치
    npm install

    # 2. 실행
    npm run dev
    ```

## 4. Everything About Variables

### 4-3. Naming

- Base is CamelCase
- UNICODE, Special Char ❌  (`_`, `$` 제외)
- 변수명 뒤 숫자로 구분 ❌ (ex. btn1, btn2)

### 4-4. Number

```js
console.log(123)  // number
console.log(123 / 0)  // Infinity
console.log(123 / -0)  // -Infinity
console.log(123 / 'text')  // NaN

// 큰 수 끝에 n 붙이면 bigint로 적용
let = bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt);  // bigint
```

### 4-5. Boolean

```js
// false 값
console.log(!!false);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!null);
console.log(!!0);
console.log(!!-0);
console.log(!!"");

// 나머지는 모두 true!
```

### 4-7. Null & Undefined

- undefined: 정해지지 않은 상태, type: undefined
- null: 값이 비어있는 상태,  tyep: object

## 5. Operator

### 5-4. Unary Operators

```js
// + 는 숫자가 아닌 타입을 숫자로 변환해 진리값 알 수 있음
console.log(+null);  // 0
console.log(+true);  // 1
console.log(+undefined);  // NaN
console.log(+'text');  // NaN
```

### 5-9. Equality operators

- `==` 값이 같음
- `!=` 값이 다름
- `===` 값과 타입이 둘다 같음
- `!==` 값과 타입이 다름

## 6. Control Flow Statement

Conditional Statement, Loop Statement

### 6-3. Ternary Operator

```js
let love = true;
let emoji = love === true ? "❤️1" : "💔";
console.log(emoji);
```

### 6-6. Switch

```js
// break를 사용하지 않는 경우
let condition = 'okay';

switch(condition) {
    // 여러가지 값이 하나로 ㄱㄱ할 때
    case 'okay':
    case 'good':
        text = '좋아';
        break
    case 'bad':
        text = '나쁨';
    default:
        text = '몰라';
}

console.log(text)
```

## 7. Function

### 7-4. Function Return

JS의 return 기본값은 `undefined`

### 7-5. Function Parameters

JS의 parameters의 기본값은 `undefined`

```js
function sum(a = 1, b = 2, ...numbers) {
  // Default Parameters(undefined일때만 default 적용)
  console.log(arguments);
  // Rest Parameters(나머지 인자는 ...numbers 에 들어감)
  console.log(a, b, numbers);
}

sum();
// [Arguments] {}
// 1 2 []

sum(10, 20, 30, 40);
// [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
// 10 20 [ 30, 40 ]
```

### 7-6. Function Expressions

```js
// IIFE(Immediately-Invoked Fuction Expressions)
(function test() {
  console.log("test");
})();
// 바로 실행됨
```

### 7-7. Callback Function

콜백 함수란?

- 함수를 등록하기만 하고 어떤 이벤트나 특점 시점에 도달했을 때 시스템에서 호출하는 함수
- 간단히: 다른 함수가 실행을 끝낸 뒤 실행하는 함수

1. First-class object

    함수가 일반 객체처럼 모든 연산이 가능한 것!  
    함수의 매개변수로 전달, 함수의 리턴값, 할당 명령문, 동일 비교 대상 등 가능

2. Higher-order function

    아래 둘 중 하나를 만족하면 고차함수
    - 인자로 함수를 받는 함수  
    - 함수를 반환하는 함수를 고차함수  

```js
const print = (v) => process.stdout.write(`${v} `);
function printDouble(v) {
  process.stdout.write(`${v * 2} `);
}

const iterate = (max, action) => {
  for (let i = 0; i <= max; i++) {
    action(i);
  }
  console.log();
};

iterate(3, print);  // 0 1 2 3
iterate(3, printDouble);  // 0 2 4 6
iterate(3, (v) => {
  process.stdout.write(`${v * 4} `);
});  // 0 4 8 12

const time = 1;
setTimeout(() => {
  console.log(`${time}초 뒤 실행된 함수입니다.`);
}, time * 1000);  // 1초 뒤 실행된 함수입니다.
```

## 8. Object

### 8-2 객체 리터럴

```js
const object = {
  key: "wansang",
  101: 101,
  [3]: "Wansang",
  ["stringWithSquareBrackets"]: "SWSB",
  "string 2": "2",
};

// dot notation(정적 접근)
console.log(object.key); // wansang
// bracket notation(동적 접근)
console.log(object["key"]); // wansang
console.log(object[101]); // 101
console.log(object[3]); // Wansang
console.log(object.stringWithSquareBrackets); // SWSB
console.log(object["string 2"]); // 2
```

### 8-4. Object Literals Using Object Property Shorthand

```js
// 8-4 객체 축약
const a = 10;
const b = 20;
const coordinate = { a, b };
console.log(coordinate); // { a: 10, b: 20 }

function makeObj(name, age) {
  return {
    name,
    age,
  };
}
console.log(makeObj("wansang", 30));
//{ name: 'wansang', age: 30 }
```

### 8-6. Create Function

```js
// 생성자 함수 정의
function Heart(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const red_heart1 = new Heart("red_heart", "❤️");
const orange_heart1 = new Heart("orange_heart", "🧡");

red_heart1.display(); // red_heart: ❤️
console.log(orange_heart1);
// Heart {
//   name: 'orange_heart',
//   emoji: '🧡',
//   display: [Function (anonymous)]
// }
```

## 9. Class

```js
// Class 연습1(Priviate, Getter, Setter)
class Counter {
  // private 설정
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 1;
    } else {
      this.#value = startValue;
    }
  }
  // getter로 들고오기(변수명과 동일)
  get value() {
    return this.#value;
  }

  // setter로 설정하기(변수명과 동일)
  set value(num) {
    this.#value = num;
  }

  // 메서드로 설정하기
  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.value = 3;
console.log(counter.value); // 3
counter.increment();
console.log(counter.value); // 4

// Class연습2(Inheritance)
class Employee {
  name;
  part;
  constructor(name, part, hoursPerMonth, payRate) {
    this.name = name;
    this.part = part;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8_000;
  constructor(name, part, hoursPerMonth) {
    super(name, part, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10_000;
  constructor(name, part, hoursPerMonth) {
    super(name, part, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

const test = new FullTimeEmployee("완상", "클라우드", 20);
const test2 = new PartTimeEmployee("재민", "클라우드", 30);
console.log(test.calculatePay()); // 200000
console.log(test2.calculatePay()); // 240000
```

## 10. Useful Objects(Built-in Objects)

### 10-3. Global Objects

```js
// Chrome에서는 Windows 객체, Node에서는 현재 모듈
globalThis
isFinite(1) // true
isFinite(Infinity) // false
parseFloat("12.34") // 12.34
parseInt("12.34") // 12
encodeURI(MyURL) // 한글 주소 encode 하기
decodeURI(MyURL) // encode된 주소 decode 하기
```

### 10-5. Numbers

```js
const num1 = 1234.12;

Number.NaN; // NaN
Number.isNaN(num1); // False

// 숫자를 정수 문자로
console.log(num1.toFixed()); // 1234
// 숫자를 문자로
console.log(num1.toString()); // 1234.12
// 숫자를 해당 국가 문자로
console.log(num1.toLocaleString("ar-XA")); // ١٬٢٣٤٫١٢
// 앞에서부터 원하는 자릿수까지 유효하도록 반올림
console.log(num1.toPrecision(2)); // 1.2e+3
console.log(num1.toPrecision(5)); // 1234.1
console.log(num1.toPrecision(7)); // 1234.120
// 지수 표기법
console.log(num1.toExponential()); // 1.23412e+3

Number.MAX_VALUE; // 최댓값
Number.POSITIVE_INFINITY; // 무한대
Number.EPSILON; // 입실론
```

### 10-7. Strings

```js
// String
myStr = "Hello World!";
// 포함
console.log(myStr.includes("Hello")); // true
console.log(myStr.indexOf("ello")); // 1
console.log(myStr.substring(0, 2)); // He
console.log(myStr.slice(-2)); // d!
```

### 10-8. Date

[Date MDN Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

## 11. Array

```js
// 맨 뒤 추가, 삭제
myFruits.push("strawberry");
myFruits.pop();

// 맨 앞 추가, 제거
myFruits.unshift("lemon");
myFruits.shift();

// (특정 번째, 몇개 삭제, 다음 추가)
myFruits.splice(1, 2, "peach", "banana", "apple");

// 뒤에서 3번째부터 마지막까지 복사
const newFruits = myFruits.slice(-3);

const nums = [3, 16, 5, 25, 4, 34, 21];

// 정렬
nums.sort((a, b) => a - b);
console.log(nums); // [3, 4, 5, 16, 21, 25, 34]

// reduce는 앞에꺼, 다음꺼 하나하나 계속
const acc_sum = nums.reduce((sum, v) => (sum += v), 0);
console.log(acc_sum); // 108

// 5보다 큰 수들의 평균
const ret2 = nums
  .filter((v) => v > 5)
  .reduce((avg, num, _, arr) => avg + num / arr.length, 0);
console.log(ret2); // 24
```

## 12. Iterable & Generator

- Iterable 하다는건 순회가 가능함

### 12-3. Iterator

```js
// 만드는 방법1
const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

// 만드는 방법2(콜백 활용)
function makeIterable(initV, maxV, callback) {
  return {
    [Symbol.iterator]() {
      let num = initV;
      return {
        next() {
          return { value: callback(num++), done: num > maxV };
        },
      };
    },
  };
}

const triple = makeIterable(0, 10, (n) => n * 3);
const single = makeIterable(0, 10, (n) => n);
```

### 12-5. Generator

```js
// 1. Generator.prototype.next()
function* getPage(list, pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list.slice(index, index + pageSize);
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const page = getPage(list, 3); // Generator { }

page.next(); // { value: [1, 2, 3], done: false }
page.next(); // { value: [4, 5, 6], done: false }
page.next(); // { value: [7, 8], done: false }
page.next(); // { value: undefined, done: true }


// 2. Generator.prototype.return()
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 'cleanup';
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// Execution is suspended before the try...finally.
g1.return('early return'); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// Execution is suspended within the try...finally.
g2.return('early return'); // { value: 'cleanup', done: false }

// The completion value is preserved
g2.next(); // { value: 'early return', done: true }

// Generator is in the completed state
g2.return('not so early return'); // { value: 'not so early return', done: true }

// 3. Generator.prototype.throw()
function* gen() {
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
console.log(g.next()); // { value: 42, done: false }
console.log(g.throw(new Error('Something went wrong')));
// "Error caught!"
// { value: 42, done: false }
```

### 12-6. Spread syntax

- 모든 Iterable은 Spread 할 수 있어!

[Spread syntax MDN 사이트 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```js
// 1. Array
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]

// 2. Object
const obj1 = { foo: 'aaa', x: 10 };
const obj2 = { foo: 'zzz', y: 200 };

const clonedObj = { ...obj1 };
// { foo: "aaa", x: 10 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "zzz", x: 10, y: 200 }
```

### 12-7. Destructuring assignment

[Destructuring assignment MDN 사이트 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

```js
const obj = { aa: 1, bb: { cc: 2 } };
//prettier-ignore
const { aa, bb: { cc: dd } } = obj;
// Two variables are bound: `aa` and `dd`

console.log(aa); // 1
// console.log(bb); // error
// console.log(cc); // error
console.log(dd); // 2

const [aaa = 1] = []; // aaa is 1
const { bbb = 2 } = { bbb: undefined }; // bbb is 2
const { ccc = 2 } = { ccc: null }; // ccc is null

const { zb = console.log('hey') } = { zb: 50 }; // zb is 50
// Does not log anything, because `zb` is defined and there's no need
// to evaluate the default value.

const wansang = { fullName: 'Wansang', age: 30, job: 'DevOps engineer' };
const { fullName, age, job: occupation, sex = 'man' } = wansang;
console.log(fullName, age, occupation, sex); // Wansang 30 DevOps engineer man
```

## 13. Map & Set

### 13-3. Map

Map과 Object의 큰 차이점(ChatGPT로 요약)

- Map keys can be any value (object, primitive, etc.), while object keys must be strings or symbols.
- Maps have a size property and provide iteration methods (such as "forEach", "entries", "keys", and "values"), while objects do not.
- Maps are ordered, while object properties have no order.
- You can use "delete" operator to remove elements from a Map, while for Objects you have to use "delete" operator and set the value to "undefined".
- Map entries can be iterated in the order they were added, while object properties have no guaranteed order for iteration.
- You can use "set" method to add or update elements in a Map, while for Objects you have to directly assign values to properties.
- Maps have a "clear" method to remove all elements, while for Objects you have to manually set each property to "undefined".
- You can use the "has" method to check if a key exists in a Map, while for Objects you have to use "in" operator or check if a property is undefined.

### 13-6. Symbol

```js
const key1 = Symbol('key');
const key2 = Symbol('key');
console.log(key1 === key2); // false

// 전역으로 Symbol 생성하기
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// 전역으로 만들면 접근 가능
const ob = { [k1]: 'hello', [Symbol('key')]: 1 };
console.log(ob); // { [Symbol(key)]: 'hello', [Symbol(key)]: 1 }
console.log(ob[k1]); // hello
console.log(ob[Symbol('key')]); // undefined
```

## 14. Useful Operators

```js

```

## 15. Comments, Error Handling, Modules

### 15-1. Comments

JSDoc 링크 <https://github.com/jsdoc/jsdoc>

```js
//주석은 필요한 경우에 작성
// TODO(완상): XX 구현하기
// 뭘하는지X, Why, How를 작성

/**
 * 주어진 두 인자를 더한 값을 반환함
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add2(a, b) {
  return a + b;
}
```

### 15-2. Error Handling

```js

```

### 15-4. Modules

```js

```

## 16. Async

## 17. Scope

## 18. Prototype

## 19. Closures

## 20. This

## 21. Babel

Babel SetUp Link <https://babeljs.io/setup#installation>

```bash
# intsall
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

babel.config.json example <https://babeljs.io/docs/en/usage#overview>

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "8",
          "firefox": "12",
          "chrome": "12",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```
