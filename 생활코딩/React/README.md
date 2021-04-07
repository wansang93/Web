# React

- 21-03-03 ~ 

유튜브 링크 -> [https://www.youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi](https://www.youtube.com/playlist?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi)

## 1. 소개(Introduction)

목표: 클래스 기반 객체지향 프로그래밍 스타일 코드 작성할 예정

### React

React: Facebook의 UI를 더 잘 만들기 위해서 만든 JS Library임

웹 페이지는 조금만 규모가 커져도 html코드가 정말 복잡해짐

html을 사용자 정의 태그를 통해 쉽게 적는 연습을 해봄

```html
<html>
    <body>
        <!-- 사용자 정의 태그를 만들면 가독성이 늘어남 -->
        <Top></Top> 
        <Sidebar></Sidebar>
    </body>
</html>
```

React에서는 *사용자 정의 태그*를 Component라고 함

장점들: 가독성, 재사용성 등등 현대적임

## 2. 공부 전략

아래 3개를 먼저 해보고 살을 붙여나가는 방식으로 설명함

개발환경 및 코딩(Coding) -> 실행(Run) -> 배포(Deploy)

## 3. 개발환경의 종류

공식문서에는 개발환경을 어떻게 setting 해야하는지 항상 있음

링크 -> [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)

아래 내용들은 Offical Sites의 내용들임

### 3-1. Online Plyagrounds(온라인에서 React 바로 실행하기)

- 사이트들은 [CodePen](https://codepen.io/pen?&editors=0010), [CodeSandbox](https://codesandbox.io/s/new), [Stackblitz](https://stackblitz.com/edit/react-1unycs) 등이 있음

### 3-2. Add React to a Website(React를 웹사이트에 추가하기)

- 부분적으로 React 기능을 추가하기, 초급자들에게는 어려움

### 3-3. Create a New React App(React App을 새로 생성하기)

- ToolChain: 개발하기 좋게 만들어놓은 것들, 추천 Toolchain을 보면 React App임
- 링크 -> [https://reactjs.org/docs/create-a-new-react-app.html#create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- 따라서 npm을 설치 -> create-react-app을 설치 -> 개발 환경 완성하기

## 4. npm을 이용해서 create app 설치

node를 다운 받기 링크 -> [https://nodejs.org/en/](https://nodejs.org/en/)
  -> npm 사용 가능

create app 설치는 2가지 방법이 있음

1. 선생님 방법, terminal에서

```bash
npm install -g create-react-app  # app 설치
create-react-app -V  # 버전 확인
```

2. 공식 방법, terminal에서

```bash
npx create-react-app
```

npm과 npx와 차이
- npx: 임시 설치, 한번만 실행할 때, 저장 공간 낭비x, 최신 상태, 일회성
- npm: 완전 설치, 저장해서 사용할 때, 저장 공간 사용, 최신 상태x, 지속성

## 5. Create React app을 이용해서 개발환경구축

개발환경구축하기 위해 React-app 폴더 생성 후 경로로 들어가서

```cmd
create-react-app .
```

## 6. 심플 웹앱 실행

실행

```cmd
npm run start
```

종료: `Ctrl` + `C`

## 7. JS코딩하는 법

### 7-0. 기본 React-app 구성

`src`와 `public` 이라는 폴더 2개가 있음

### 7-1. `public`의 `index.html`이 사실상 띄워주는 web page임

`index.html`를 살펴보면 `root`라는 id가 있음

```html
<!-- 29번째 줄 -->
<div id="root"></div>
```

### 7-2. (중요 JS 코딩법) `src`의 `index.js`가 진입 파일(entry file)임

`index.js` 내용을 보면 render 안에 `<App />`과 `root`를 불러오는게 있음

`root` 안에 `App`을 실행해라 라는 뜻임

```javascript
import App from './App';

// 1. JS에서 html의 root태그를 불러온다.
// 2. APP.js파일을 적용시켜 ReactDOM의 랜더 함수를 실행시킴
// 3. 결과적으로 APP.js 파일이 실행됨
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### 7-3. `src`의 `APP.js`

function 방식의 App

```javascript
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello, Wansang Kim!
    </div>
  );
}

export default App;
```

Class 방식의 App

```javascript
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello, Wansang Kim!
      </div>
    );
  }
}
export default App;
```

## 8. CSS 코딩하는 법

Create_React_app에서의 CSS 코딩 방법임, React의 방법이 아님

index.js 파일에 `import './index.css';`라는 적혀있음

`index.css` 파일을 아래와 같이 수정하면 바탕화면이 하늘색이 됨

```css
body{
  background-color: powderblue;
}
```

다시 `idnex.js` 파일로 보면 아래와 같이 되어있다.

```javascript
// import css를 하기 때문에 css 업로드 가능
import './index.css';
// from ./App.js 에서 .js는 생략이 가능
import App from './App';
```

디자인이 우리를 귀찮게 하면 안되기 때문에 `app.css`와 `index.css`안의 내용을 전부 지움

이제 시작임

## 9. 배포하는 법

새로고침 cashe 없에기, 기능이 없는데 1.7MB임, 개발환경의 파일이라 무게가 무거움

빌드(개발한 것을 완성 후 배포 전 상태)할 때는 다른 명령어로 실행

```bash
npm run build
```

`build` 폴더가 생기고 `index.html` 파일이 있음

실제로 서비스를 할때는 빌드안의 파일들을 사용하면 됨, 간단한 웹서버 설치 가능

```bash
npm install -g serve  # 자주 사용할 serve 환경 구성
npx serve -s build  # 한번만 실행할 서버 구성
```

실행 결과
```bash
┌────────────────────────────────────────────────────┐
│                                                    │
│   Serving!                                         │
│                                                    │
│   - Local:            http://localhost:5000        │
│   - On Your Network:  http://192.168.29.250:5000   │
│                                                    │
│   Copied local address to clipboard!               │
│                                                    │
└────────────────────────────────────────────────────┘
```

## 10. 리액트가 없다면

태그를 간단한 의미를 포함하면 편리할꺼 같다 -> React의 출발

`pure.html` 파일 기준

```html
<body>
    <!-- header로 시멘틱 의미를 부여 -->
    <header>
        <h1>WEB</h1>
        World Wide Web Wansang!
    </header>
    <!-- nav 시멘틱 의미를 부여 -->
    <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>
    <!-- article 시멘틱 의미를 부여 -->
    <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
    </article>
</body>
```

## 11. 컴포넌트 만들기

```javascript
import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        World Wide Web Wansang!
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.CSS">CSS</a>
          </li>
          <li>
            <a href="3.JavaScript">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Article></Article>
      </div>
    );
  }
}

export default App;
```

## 12. Props

html의 속성(attribute)과 똑같은 기능, 용어 중복 때문에 새롭게 용어를 만든 듯(?)

```javascript
class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
      </div>
    );
  }
}

export default App;
```

## 13. React Developer Tools

설명서를 잘 읽어야 함(스펙 문서 읽기) 그리고 현재 상태를 측정하고 분석하기

시간이 너무많이 걸림 -> 질문하고 검색하기 때문에 정보기술의 고도의 발전으로

status를 현재의 상태를 알아내는 도구를 알아보자

React 개발에 있어서 필요한 도구 중 Debug 툴을 다운로드 받아보자 [링크](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler)

Chrome debug를 다운하고 개발자 툴을 보면 리엑트 화면으로 html이 아닌 컴포넌트 단위로 볼 수 있음

## 14. Component 파일로 분리하기

Component를 정리정돈 해보자

Component 폴더을 만들고 `Article.js`, `Subject.js`, `TOC.js` 생성

아래처럼 `import React ~`를 해주고 내용을 적고 `export`를 해줄 것

```javascript
import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Article;
```

`App.js` 파일

```javascript
import TOC from "./components/TOC";
import Article from "./components/Article";
import Subject from "./components/Subject";
```

## 15-1. State 소개

Props와 State를 알아보자

props를 사용했는데도 state를 사용하는 이유
- 사용하는 쪽과 구현하는 쪽을 철저하게 분리시켜서 양쪽의 편의성을 각자 도모
- 사용자가 알 필요가 없는 데이터를 내부에서 은닉하는 것
- 캡슐화를 통해 코드를 리펙토링 하는 것이 좋은 사용성을 만드는 핵심

## 15-2. State 사용

- 컴포넌트가 실행 될 때 컨스트럭트라는 함수가 있으면 제일 먼저 실행, 초기화 담당
- 초기화가 끝나면 state 값을 초기화한 것에 값을 넣어줌

`App.js` 파일

```javascript
class App extends Component {
  // State 사용을 위한 추가
  constructor (props) {
    super(props);
    this.state = { 
      subject: {title: 'WEB', desc: 'World Wide Web!'},

    // 변경 전
    <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
    // 변경 후
    <Article title={this.state.subject.title} desc={this.state.subject.desc}></Article>
    }
  }
}
```

### 15-3. Key 사용

state가 여러개일 경우

`App.js` 파일 주석 참고

```javascript
import React, { Component } from "react";
import "./App.css";
import TOC from "./components/TOC";
import Article from "./components/Article";
import Subject from "./components/Subject";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', desc: 'World Wide Web!'},
      // Key를 사용하기 위해서 이 부분을 추가
      contents: [
        {id:1, title: 'HTML', desc: 'HTML is information'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC data={this.state.contents}></TOC>
        <Article title="HTML" desc="HTML is HyperText Markup Language."></Article>
        <Article title="CSS" desc="CSS is the language we use to style an HTML document."></Article>
      </div>
    );
  }
}

export default App;
```

`TOC.js` 파일 주석 참고

```javascript
import React, { Component } from "react";

class TOC extends Component {
  render() {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
        // 키 추가로 React 내부적으로 논리를 만드는 역할
        // li는 key라는 props를 가져야 함
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
        i = i + 1;
    }
    return (
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
```

### 16-1. 이벤트 state props 그리고 render 함수

```

```
