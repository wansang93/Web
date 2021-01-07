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
<span><h1>블록 레벨 요소</h1></span>
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

`target` 속성값
- `_self`: 자기 자신(기본값)
- `_blank`: 빈 페이지
- `_parent`: 부모창
- `_top`: 가장 상위 창

`title`: 링크 미리보기

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

### 1.4.5 이미지 `<img>`

## 1.5 텍스트 관련 요소

- `<em>`: 
- `<strong>`: 
- `<mark>`: 
- `<b>`: 
- `<small>`: 
- `<sub>`: 
- `<sup>`: 

## 1.6 목록 관련 요소

- `<ol>`: 
- `<ul>`: 
- `<dl>`: 

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