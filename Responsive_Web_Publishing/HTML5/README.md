# 1. HTML5

## 1.1 HTML5 기본 문서

### 1.1.1 HTML5 기본 구성

태그(tag), 요소(element), 속성(attribute), 마크업(markup)

### 1.1.2 W3C Validator

문법 유효성 검사 사이트 -> [http://validator.w3.org](http://validator.w3.org)

### 1.1.3 마크업 기본 문법 규칙

1. 요소는 시작 태그와 종료 태그가 있어야 함
2. 요소는 제대로 중첩되어야 함
3. `img` 태그에는 `alt` 속성이 있어야 함
4. 권장 사항: **특정 태그 닫아두기**
5. 주석처리: `Ctrl` + `/`

## 1.2 시멘틱 마크업과 논리적 순서 마크업

### 1.2.1 시멘틱 마크업(Semantic markup)

**시멘틱(semantic)하게 마크업**을 해야 됨 -> 태크를 봤을 때 **콘텐츠 의미를 해석 가능**하기 때문

### 1.2.2 논리적 순서 마크업(Logical sequence markup)

논리적 순서에 의한 마크업은 입력장치만으로 HTML 문서의 모든 콘텐츠를 논리적 순서로 이동할 수 있게 함, **웹접근성** 상향

`웹접근성`에 대한 구체적인 내용 링크 -> [https://www.wah.or.kr:444/index.asp](https://www.wah.or.kr:444/index.asp)

## 1.3 블록 레벨 요소와 인라인 요소

### 1.3.1 블록 레벨 요소(Block-level Elements)

자동으로 줄을 바꿔줌

```html
<h1>블록 레벨 요소</h1>
<h2>블록 레벨 요소 성질</h2>
<p>줄 바꿈이 생깁니다.</p>
```

### 1.3.2 인라인 요소(inline Element)

자동으로 줄을 바꾸지 않음

```html
<strong>인라인 요소</strong>
<span>인라인 요소는 한 줄로 출력됩니다.</span>
```

### 1.3.3 블록 레벨 요소와 인라인 요소의 특성

`인라인 요소` 자식으로 `블록 레벨 요소` 불가

```html
<!-- 크롬으로 출력은 되지만 유효성 검사를 하면 Error 발생 -->
<span><h1>유효성 검사시 실패</h1></span>
```

## 1.4 기본 요소

### 1.4.1 제목 `<h1>` ~ `<h6>`

- 1~6 까지 가능
- 실제 마크업할 때는 완성된 디자인을 참고하여 콘텐츠에 제목의 의미를 부여 ->
- 기획 단계에서 내용의 중요도와 흐름을 먼저 파악하는게 중요

```html
<h1>반응형 웹사이트 제작1</h1>
<h2>반응형 웹사이트 제작2</h2>
<h3>반응형 웹사이트 제작3</h3>
<h4>반응형 웹사이트 제작4</h4>
<h5>반응형 웹사이트 제작5</h5>
<h6>반응형 웹사이트 제작6</h6>
```

### 1.4.2 문단 `<p>`, `<pre>`

- `<p>`: 단락(paragraph)을 정의
- `<br>`: 줄바꿈
- `<pre>`: 일반 문서 편집기 처럼 사용

```html
<p>p 요소는 텍스트와 인라인 요소를 포함할 수 있지만 같은 블록 요소는
    포함할 수 없습니다.</p>
<p>p 요소는 텍스트와 인라인 요소를 포함할 수 있지만 같은 블록 요소는<br>포함할 수 없습니다.</p>
```

```html
<pre>
    p 요소는 텍스트와 인라인 요소를 포함할 수 있지만
        같은 블록 요소는
            포함할 수 없습니다.
</pre>
```

### 1.4.3 주소 `<address>`

HTML 문서의 소유자나 조직에 대한 연락처 정보를 정의할 때 사용

```html
<address>
    서울특별시 영등포구 당산2동 <br>
    이메일 : <a href="mailto:w******93@naver.com">w******93@naver.com</a> <br>
    전화번호 : 010-****-****
</address>
```

### 1.4.4 링크 `<a>`

링크를 연결해주는 태그, HTML의 꽃

- `href`: 링크 경로
- `target` 속성: 링크를 열었을 때 어디에 표시할지 결정
  - `_self`: 자기 자신(기본값)
  - `_blank`: 빈 페이지
  - `_parent`: 부모창
  - `_top`: 가장 상위 창

- `title`: 링크 설명

```html
<!-- 외부 링크 가기 -->
<a href="http://icoxpublish.com/">아이콕스</a>
<!-- 이메일 주소 링크 방법 -->
<a href="mailto:icoxpub@naver.com">icoxpub@naver.com</a>
<!-- 웹 최상단으로 이동 -->
<a href="#">
    <!-- 블록 레벨 요소도 포함할 수 있음 -->
    <section>
        <h2>새로나온책</h2>
        <p>반응형 웹퍼블리싱</p>
    </section>
</a>
<!-- 내부 링크 가기 -->
<a href="#content">본문바로가기</a>
```

```html
<a href="http://icoxpublish.com" target="_blank">아이콕스</a>
<!--  -->
<a href="#" onclick="window.open( 'http://icoxpublish.com' ); return false" title="새 창">아이콕스</a>
```

웹접근성을 제작할 때 반복되는 영역을 건너뛰고 핵심 컨텐츠 영역으로 바로갈 수 있게 만들어야 함

`건너뛰기 링크`, `스킵 네이게이션(Skip Navigation)`이라고 부름

```html
<a href="#container">본문 바로가기</a>
<div id="container">메인 콘텐츠</div>
```

### 1.4.5 이미지 `<img>`, `<map>`

- `src` 속성: 이미지 경로를 지정
- `alt` 속성이 필요한 이유
  - 스크린 리더(음성낭독프로그램)에서 img 태그로 접근시 음성으로 읽어줌
  - 외부적 환경으로 이미지를 불러올수 없을 때 텍스트로 출력되 내용 전달 가능
  - 만약 내용 전달할 필요가 없는 경우 아래 같이 정의해도 됨

```html
<h1><img src="images/logo.png" alt="아이콕스"></h1>
<a href="#"><img src="images/whitestar.jpg" alt="화이트스타"></a>
<img src="icon.png" alt>
```

`<map>` 태그: 하나의 이미지에 여러 개의 링크가 적용되어야 하는 경우

```html
<img src="images/map.jpg" alt="웹도서관" usemap="#library">
<map name="library">
    <!-- rect(사각형): x1, y1, x2, y2
    circle(원): x1, y1, 반지름
    ploy(다각형): 각 꼬지점의 좌표값들 -->
    <area shape="rect" coords="48,10,290,132" href="#" alt="A관" target="_blank">
    <area shape="circle" coords="330,200,10" href="#" alt="B관" target="_blank">
    <area shape="poly" coords="10,10,20,20,10,30" href="#" alt="B관" target="_blank">
</map>
```

## 1.5 텍스트 관련 요소

- `<em>`: 기울임체 -> 강조, 문맥 의미 변화 가능
- `<strong>`: 굵은체 -> 중요, 문맥 의미 변화x, 일반적으로 중요한 단어 강조
- `<mark>`: 노란색 표시 -> 주의 깊게 볼 텍스트 강조
- `<b>`: 굵은체 -> 안중요
- `<small>`: 작은글씨로 표현 -> 주의 사항, 법적 제한, 저작권 등 정의
- `<sub>`: 아래첨자
- `<sup>`: 윗첨자

문장에서 특정 단에 대한 강조나 중요 의미가 아니라 단순히 기울임체, 굵은체 표시하고 싶으면 CSS 이용

```css
.txt1{font-weight: bold;}
.txt2{font-style: italic;}
```

```html
<p>웹페이지 제작 시 <em>웹표준</em>과 웹접근성을 준수합니다.</p>
<p>웹페이지 제작 시 <strong>웹표준</strong>과 <strong>웹접근성</strong>을 준수합니다.</p>
<p>웹페이지 제작 시 <mark>웹표준</mark>과 웹접근성을 준수합니다.</p>
<p><b><span>웹페이지</span></b> 제작 시 웹표준과 웹접근성을 준수합니다.</p>
<p><small>COPYRIGHT © All rights reserved.</small></p>
<p>물의 화학식은 H<sub>2</sub>O입니다.</p>
<p>100m<sup>2</sup></p>
```

## 1.6 목록 관련 요소 `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`

`<ol>`: Order list, 순서 정의
- 자식 요소로 반드시 `<li>` 태그를 정의, 다른 태그는 자식 요소로 불가

```html
<ol>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
</ol>
```

`<ul>`: Unorder list, 순서 비정의
- 자식 요소로 반드시 `<li>` 태그를 정의, 다른 태그는 자식 요소로 불가

```html
<ul>
    <li><a href="#">메뉴1</a>
        <ul><!--메뉴1의 서브메뉴-->
            <li><a href="#">메뉴1_1</a></li>
            <li><a href="#">메뉴1_2</a></li>
            <li><a href="#">메뉴1_3</a></li>
        </ul>
    </li>
    <li><a href="#">메뉴2</a>
        <ul><!--메뉴2의 서브메뉴-->
            <li><a href="#">메뉴2_1</a></li>
            <li><a href="#">메뉴2_2</a></li>
            <li><a href="#">메뉴2_3</a></li>
        </ul>
    </li>
    <li><a href="#">메뉴3</a>
        <ul><!--메뉴3의 서브메뉴-->
            <li><a href="#">메뉴3_1</a></li>
            <li><a href="#">메뉴3_2</a></li>
            <li><a href="#">메뉴3_3</a></li>
        </ul>
    </li>
</ul>
```

`<dl>`: Discription List, 설명 목록을 정의
- 자식 요소로 반드시 `<dt>`, `<dd>`를 정의해야 함
- 다른 태그는 자식 요소로 올 수 없지만 `<div>` 태그는 예외적으로 올 수 있음
- `<div>` 태그는 `<dt>`, `<dd>`를 한쌍으로 묶기만 가능

```html
<dl>
    <dt>html</dt>
    <dd>Hypertext Markup Language</dd>
    <dd>version html4.0, xhtml1.0, html5</dd>
    <dt>css</dt>
    <dd>cascading style sheets</dd>
    <dd>version css2, css3</dd>
</dl>
```

## 1.7 표 관련 요소 및 속성

### 1.7.1 표 생성

- `<table>`: 
- `<tr>`: 
- `<td>`: 
- `<th>`: 
- `<thead>`: 
- `<tbody>`: 
- `<tfoot>`: 
- `<colgroup>`: 

### 1.7.2 셀 합치기, colspan 속성, rowspan 속성

### 1.7.3 표 접근성 `<caption>`, scope 속성

## 1.8 폼 관련 요소 및 주요 속성

### 1.8.1 폼 `<form>`, `<fieldset>`

### 1.8.2 한줄 입력 요소 `<input>`, `type` 속성

### 1.8.3 여러 줄 입력 요소, 선택 요소 `<textarea>`, `<select>`

### 1.8.4 폼 접근성 label 속성

### 1.8.5 주요 입력 속성

## 1.9 그룹 요소

### 1.9.1 `<div>`

### 1.9.2 `<span>`

## 1.10 구조 관련 요소

- `<header>`: 
- `<section>`: 
- `<footer>`: 
- `<nav>`: 
- `<article>`: 
- `<aside>`: 

## 1.11 미디어 요소

- `<audio>`: 
- `<video>`: 