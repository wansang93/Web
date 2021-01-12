# 1. HTML5

- [test.html](./test.html)

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

## 1.4 기본 요소 **`<h1>`** ~ **`<h6>`**, **`<p>`**, **`<pre>`**, **`<br>`**, **`<address>`**, **`<a>`**, **`<img>`**, **`<map>`**

### 1.4.1 제목 **`<h1>`** ~ **`<h6>`**

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

### 1.4.2 문단 **`<p>`**, **`<pre>`**, **`<br>`**

- **`<p>`**: 단락(paragraph)을 정의
- **`<br>`**: 줄바꿈
- **`<pre>`**: 일반 문서 편집기 처럼 사용

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

### 1.4.3 주소 **`<address>`**

**`<address>`**: HTML 문서의 소유자나 조직에 대한 연락처 정보를 정의할 때 사용

```html
<address>
    서울특별시 영등포구 당산2동 <br>
    이메일 : <a href="mailto:w******93@naver.com">w******93@naver.com</a> <br>
    전화번호 : 010-****-****
</address>
```

### 1.4.4 링크 **`<a>`**

**`<a>`**: 링크를 연결해주는 태그, HTML의 꽃

- `href` 속성: 링크 경로
- `target` 속성: 링크를 열었을 때 어디에 표시할지 결정
  - `_self`: 자기 자신(기본값)
  - `_blank`: 빈 페이지
  - `_parent`: 부모창
  - `_top`: 가장 상위 창
- `title` 속성: 링크 설명

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

### 1.4.5 이미지 **`<img>`**, **`<map>`**

**`<img>`**: 이미지를 불러오는 태그
- `src` 속성: 이미지 경로를 지정
- `alt` 속성: 이미지가 깨질 때 나오는 글자, `alt` 속성은 반드시 적어줌
  - 스크린 리더(음성낭독프로그램)에서 img 태그로 접근시 음성으로 읽어줌
  - 외부적 환경으로 이미지를 불러올수 없을 때 텍스트로 출력되 내용 전달 가능
  - 만약 내용 전달할 필요가 없는 경우 아래 같이 정의해도 됨

```html
<h1><img src="images/logo.png" alt="아이콕스"></h1>
<a href="#"><img src="images/whitestar.jpg" alt="화이트스타"></a>
<img src="icon.png" alt>
```

**`<map>`**: 하나의 이미지에 여러 개의 링크가 적용되어야 하는 경우

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

## 1.5 텍스트 관련 요소 **`<em>`**, **`<strong>`**, **`<mark>`**, **`<b>`**, **`<small>`**, **`<sub>`**, **`<sup>`**

- **`<em>`**: 기울임체 -> 강조, 문맥 의미 변화 가능
- **`<strong>`**: 굵은체 -> 중요, 문맥 의미 변화x, 일반적으로 중요한 단어 강조
- **`<mark>`**: 노란색 표시 -> 주의 깊게 볼 텍스트 강조
- **`<b>`**: 굵은체 -> 안중요
- **`<small>`**: 작은글씨로 표현 -> 주의 사항, 법적 제한, 저작권 등 정의
- **`<sub>`**: 아래첨자
- **`<sup>`**: 윗첨자

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

## 1.6 목록 관련 요소 **`<ol>`**, **`<ul>`**, **`<li>`**, **`<dl>`**, **`<dt>`**, **`<dd>`**

**`<ol>`**: Order list, 순서 정의
- 자식 요소로 반드시 **`<li>`** 태그를 정의, 다른 태그는 자식 요소로 불가

```html
<ol>
    <li>html</li>
    <li>css</li>
    <li>javascript</li>
</ol>
```

**`<ul>`**: Unorder list, 순서 비정의
- 자식 요소로 반드시 **`<li>`** 태그를 정의, 다른 태그는 자식 요소로 불가

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

**`<dl>`**: Discription List, 설명 목록을 정의
- 자식 요소로 반드시 **`<dt>`**, **`<dd>`**를 정의해야 함
- 다른 태그는 자식 요소로 올 수 없지만 **`<div>`** 태그는 예외적으로 올 수 있음
- **`<div>`** 태그는 **`<dt>`**, **`<dd>`**를 한쌍으로 묶기만 가능

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

### 1.7.1 표 생성 **`<table>`**, **`<tr>`**, **`<td>`**, **`<th>`**, **`<thead>`**, **`<tbody>`**, **`<tfoot>`**, **`<colgroup>`**

**`<table>`**: 표 정의, 행과 열의 2차원 정보로 구성
- 자식 요소로 반드시 **`<tr>`** 태그를 정의 해야 함
- **`<table>`** -> **`<tr>`** -> **`<td>`** 로 마크업 해야함
  - **`<tr>`**: **`<table>`** 태그의 자식 요소로 행을 정의
  - **`<td>`**: **`<tr>`** 태그의 자식 요소로 열을 정의
  - **`<th>`**: 태그는 제목 역할을 하는 셀을 정의(굵은 폰트로 중앙 정렬)
  - **`<thead>`**: 제목
  - **`<tbody>`**: 본문
  - **`<tfoot>`**: 열의 요약
**`<colgroup>`**: 열을 그룹화하기
- **`<col>`**: 한 열을 가르킴

```html
<table>
    <colgroup>
        <col>
        <col>
    </colgroup>
    <thead>
        <tr>
            <th>교과목</th>
            <th>점수</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>HTML</th>
            <td>93</td>
        </tr>
        <tr>
            <th>CSS</th>
            <td>92</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>평균</th>
            <td>92.5</td>
        </tr>
    </tfoot>
</table>
```

### 1.7.2 셀 합치기, colspan 속성, rowspan 속성

- `colspan` 속성: 합치기 될 열의 수 지정
- `rowspan` 속성: 합치기 될 행의 수 지정

```html
<table>
    <tr>
        <td colspan="3">1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
</table>
<table>
    <tr>
        <td rowspan="2">1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
    </tr>
</table>
```

### 1.7.3 표 접근성 **`<caption>`**, scope 속성

- **`<caption>`**: 표의 제목을 정의
- **`<th>`**: 제목 셀
  - `scope` 속성: 열이나 행의 제목을 정의

위 두 경우를 정의할 경우 표 접근성이 높아집니다. 대표적인 예로 스크린 리더에서 잘 읽어줍니다.

```html
<table>
    <caption>상품에 따른 상하반기 판매랑</caption>
    <colgroup>
        <col>
        <col>
        <col>
    </colgroup>
    <thead>
        <tr>
            <th scope="col">구분</th>
            <th scope="col">데스크탑 PC</th>
            <th scope="col">스마트폰</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">상반기 판매수</th>
            <td>2만대</td>
            <td>5만대</td>
        </tr>
        <tr>
            <th scope="row">하반기 판매수</th>
            <td>3만대</td>
            <td>7만대</td>
        </tr>
    </tbody>
</table>
```

## 1.8 폼 관련 요소 및 주요 속성 **`<form>`**, **`<fieldset>`**, **`<input>`**, **`<textarea>`**, **`<select>`** 

### 1.8.1 폼 **`<form>`**, **`<fieldset>`**

**`<form>`**: 검색, 로그인, 회원가입 등에서 입력한 값들을 처리하는 프로그램으로 전송할 때 사용
- `action` 속성: 작성한 값을 처리하는 프로그램의 주소(URL)을 지정
- `method` 속성: 서식의 값들을 서버 프로그램에 어떤 방식으로 전달할 것인지 정의
  - `get` 방식: 검색
  - `post` 방식: 로그인, 회원가입 등 중요한 정보를 전송

**`<fieldset>`**: 양식 요소들을 그룹화
- **`<legend>`**: 그룹화 된 서식의 제목을 정의할 때, **`<fieldset>`** 자식 요소로 포함

```html
<form action="#" method="post">
    <fieldset>
        <legend>로그인</legend>
        <p>ID : <input type="text"></p>
        <p>PW : <input type="password"></p>
    </fieldset>
</form>
```

### 1.8.2 한줄 입력 요소 **`<input>`**, `type` 속성

**`<input>`**: 사용자로부터 데이터 값을 입력받기 위한 태그
- `type` 속성: 다양한 폼 컨트롤 생성 가능, 아래는 속성 값들
  - `text`, `password`, `search`, `email`, `tel`, `color`, `number`, `range`, `radio`, `checkbox`, `submit`, `reset`, `button`, `image`, `file`, `hidden`

```html
<form action="#" method="post">
    <fieldset>
        <legend>type 속성</legend>
        <p>아이디 : <input type="text"></p>
        <p>비밀번호 : <input type="password"></p>
        <p>검색 : <input type="search"></p>
        <p>이메일 : <input type="email"></p>
        <p>전화번호 : <input type="tel"></p>
        <p>컬러선택 : <input type="color"></p>
        <p>수량 : <input type="number" min="1" max="10" value="1"></p>
        <p>만족도 : <input type="range" min="1" max="10" value="1"></p>
        <p>예<input type="radio" name="receive" checked="checked"> 아니오<input type="radio" name="receive"></p>
        <p>html<input type="checkbox" checked="checked"> css<input type="checkbox"></p>
        <p><input type="submit" value="전송"></p>
        <p><input type="reset" value="취소"></p>
        <p><input type="button" value="확인"></p>
        <p><input type="image" src="images/bt.png" alt="전송"></p>
        <p><input type="file"></p>
    </fieldset>
</form>
```

### 1.8.3 여러 줄 입력 요소, 선택 요소 **`<textarea>`**, **`<select>`**

**`<textarea>`**: 여러 줄 텍스트 입력상자 태그
- `row` 속성: 행 수를 지정
- `column` 속성: 열 수를 지정

**`<select>`**: 선택 목록 상자
- **`<option>`**: 선택 목록 상자 목록을 담는 태그
  - `selected` 속성: 기본값으로 표시

```html
<form action="#" method="post">
    <fieldset>
        <legend>회원가입</legend>
        <p>가입목적 :<br><textarea rows="5" cols="100"></textarea></p>
        <p>전화번호 :
            <select>
                <option>지역번호</option>
                <option selected="selected">02</option>
                <option>031</option>
                <option>044</option>
            </select>
            <input type="text">
        </p>
    </fieldset>
</form>
```

### 1.8.4 폼 접근성 label 속성

**`<label>`**: **`<input>`**, **`<textarea>`**, **`<select>`**들에 대한 제목을 정의하는 태그
- `for` 속성: 사용자 입력 태그의 제목으로 연결하기 위해서 `for 속성 값`과 `사용자 입력 태그의 id 속성 값`을 동일하게 정의해 사용

**`<label>`** 태그를 이용하면 접근성 높은 폼 서식을 마크업 할 수 있음

```html
<h1>label 요소</h1>
<form action="#" method="post">
    <table>
        <caption>회원가입 입력</caption>
        <colgroup>
            <col>
            <col>
        </colgroup>
        <tbody>
            <tr>
                <th scope="row"><label for="id">아이디</label></th>
                <td><input type="text" id="id" title="아이디 입력"></td>
            </tr>
            <tr>
                <th scope="row"><label for="pw">비밀번호</label></th>
                <td><input type="password" id="pw" title="비밀번호 입력"></td>
            </tr>
            <tr>
                <th scope="row"><label for="r_pw">비밀번호 재입력</label></th>
                <td><input type="password" id="r_pw" title="비밀번호 재입력"></td>
            </tr>
            <tr>
                <th scope="row"><label for="email">이메일</label></th>
                <td><input type="text" id="email" title="이메일아이디 입력">@<input type="text" title="이메일주소 입력"></td>
            </tr>
            <tr>
                <th scope="row"><label for="hp">핸드폰 번호</label></th>
                <td>
                    <select id="hp" title="휴대폰 앞자리 선택">
                        <option>선택</option>
                        <option>010</option>
                        <option>011</option>
                    </select>-
                    <input type="text" title="휴대폰 번호 중간 4자리 입력">-
                    <input type="text" title="휴대폰 번호 끝 4자리 입력">
                </td>
            </tr>
        </tbody>
    </table>
    <div><input type="submit" value="회원가입"><input type="reset" value="취소"></div>
</form>
```

### 1.8.5 주요 입력 속성

- `placeholder` 속성: 입력 내용에 대한 힌트를 제공

```html
<form>
    <fieldset>
        <legend>필드에 입력형식 힌트주기</legend>
        <p><label for="id">아이디</label><input type="text" id="id" placeholder="아이디" title="아이디 입력"></p>
        <p><label for="pw">비밀번호</label><input type="password" id="pw" placeholder="비밀번호" title="비밀번호 입력"></p>
    </fieldset>
</form>
```

- `required` 속성: 적용된 입력 요소에 내용이 비어 있을 경우 경고 메시지 표시

```html
<form action="#" method="post">
    <fieldset>
        <legend>필수입력 유효성 검사</legend>
        <p><label for="id">* 아이디</label><input type="text" id="id" title="아이디 입력" required="required"></p>
        <p><label for="pw">* 비밀번호</label><input type="password" id="pw" title="비밀번호 입력" required="required"></p>
        <p><input type="submit" value="확인"></p>
    </fieldset>
</form>
```

- `autocomplete` 속성: 입력 요소에 자동완성 기능 여부를 on, off 값으로 설정해 주는 속성

```html
<form action="#" method="post">
    <fieldset>
        <legend>자동완성 기능</legend>
        <p><label for="phone">전화번호</label><input type="tel" id="phone" autocomplete="off" title="전화번호 입력"></p>
        <p><label for="email">이메일</label><input type="email" id="email" autocomplete="on" title="이메일 입력"></p>
        <p><input type="submit" value="확인"></p>
    </fieldset>
</form>
```

- `pattern` 속성: 지정한 문자패턴(정규식)과 입력된 내용의 일치 여부를 판단

```html
<form action="#" method="post">
    <fieldset>
        <legend>정규식 속성</legend>
        <p><label for="tel">휴대폰 번호</label><input type="tel" id="tel" pattern="\d{3}-\d{3,4}-\d{4}"
                required="required" title="휴대폰 번호는 숫자 3자리-숫자 3자리에서 4자리-숫자 4자리 입력"></p>
        <p><input type="submit" value="확인"></p>
    </fieldset>
</form>
```

- `multiple` 속성: 여러 개의 이메일을 ','로 입력하거나 파일 업로드 시 여러 개의 파일을 동시에 선택할 수 있도록 해주는 속성

```html
<form action="#" method="post">
    <fieldset>
        <legend>다중파일 선택</legend>
        <p><label for="email">이메일</label><input type="email" id="email" multiple="multiple" title="이메일 입력"> <label
                for="file">파일 찾기</label><input type="file" id="file" multiple="multiple"></p>
    </fieldset>
</form>
```

- `disabled` 속성: 요소를 사용할 수 없도록 비활성화 상태로 만들어 주는 속성
- `readonly` 속성: 입력된 내용을 수정할 수 없도록 만들어 주는 속성

```html
<form>
    <fieldset>
        <legend>disabled 속성과 readonly 속성</legend>
        <p><label for="identification">인증번호</label><input type="text" id="identification" title="인증번호 입력"><input
                type="button" value="이전"><input type="button" value="다음" disabled="disabled"></p>
        <p><label for="book">선택한 책</label><input type="text" id="book" value="반응형 웹" readonly="readonly"> <label
                for="quantity">수량</label><input type="number" id="quantity" min="1" value="1" title="수량 입력"></p>
    </fieldset>
</form>
```

## 1.9 그룹 요소 **`<div>`**, **`<span>`**

**`<div>`** 와 **`<span>`** 의 공통점
- CSS를 손쉽게 적용하기 위해 사용
- 태그 자체는 아무런 의미가 없음

**`<div>`** 와 **`<span>`** 의 차이점 -> [링크](https://mainia.tistory.com/3289#:~:text=div%20%EB%8A%94%20%EC%A4%84%20%EB%B0%94%EA%BF%88%EC%9D%B4,%EC%9D%84%20%ED%86%B5%ED%95%B4%EC%84%9C%20%EC%9E%90%EC%84%B8%ED%9E%88%20%EC%95%8C%EC%95%84%20%EB%B3%B4%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4.)

### 1.9.1 **`<div>`**

요소들을 그룹으로 정의하는 태그, 줄바꿈 기능o
텍스트, 인라인 요소, 블록 레벨 요소를 모두 포함 가능

### 1.9.2 **`<span>`**

인라인 요소들을 그룹으로 정의하는 태그, 줄바꿈 기능x

## 1.10 구조 관련 요소 **`<header>`**, **`<section>`**, **`<footer>`**, **`<nav>`**, **`<article>`**, **`<aside>`**

- **`<header>`**: HTML 문서의 헤더 영역, 제목이나 내비게이션, 검색 등의 내용들을 포함
- **`<section>`**: HTML 문서에서 맥락이 같은 요소들을 주제별로 그룹화, 섹션 주제에 대한 제목 요소를 포함하는 것이 좋음
- **`<footer>`**: 푸터 영역을 의미하는 태그, 섹션 작성자나 저작권에 대한 정보나 관련된 문서의 링크를 포함
- **`<nav>`**: HTML 문서의 메인 메뉴나 목차 등을 정의
- **`<article>`**: HTMl 문서 내 독립적으로 배포, 재사용이 가능한 게시물, 뉴스 기사 등을 의미, 제목요소를 포함하는 것이 좋음
- **`<aside>`**: 메인 콘텐츠와 직접적인 관련 없는 영역을 의미, HTML 문서의 사이트 메뉴나 광고 등의 영역으로 사용

![구조화 예시](./구조화%20예시.png)

```html
<header>
    <h1><a href="#">반응형웹</a></h1>
    <nav>
        <ul>
            <li><a href="#">MENU01</a></li>
            <li><a href="#">MENU02</a></li>
            <li><a href="#">MENU03</a></li>
            <li><a href="#">MENU04</a></li>
            <li><a href="#">MENU05</a></li>
        </ul>
    </nav>
</header>
<div id="container">
    <section>
        <h2>콘텐츠 그룹01</h2>
    </section>
    <section>
        <h2>콘텐츠 그룹02</h2>
    </section>
    <article>
        <h2>주요기사</h2>
    </article>
    <aside>광고</aside>
</div>
<footer>
    <address>경기도 부천시 오정구 삼정동 032)674-5685 icoxpub@naver.com</address>
    <p>COPYRIGHT © All rights reserved.</p>
</footer>
```

## 1.11 미디어 요소 **`<audio>`**, **`<video>`**, **`<iframe>`**

### 1.11.1 **`<audio>`**

오디오를 삽입할 때 사용하는 태그, mp3, wav, ogg 형식 지원

```html
<audio controls>
    <source src="media/applause.wav" type="audio/wav">
    <source src="media/applause.ogg" type="audio/ogg">
    <source src="media/applause.mp3" type="audio/mp3">
</audio>
```

### 1.11.2 **`<video>`**

동영상을 삽입할 때 사용하는 태그

```html
<video controls poster="images/sun.jpg" width="800" height="450">
    <source src="media/sunrise.mp4" type="video/mp4">
    <source src="media/sunrise.webm" type="video/webm">
    <source src="media/sunrise.ogg" type="video/ogg">
</video>
```

**`<iframe>`**: 유튜브에 올린 영상이나 다른 HTML 문서를 삽입하고 싶을 때

- 특수문자 표시법 Entity Name
  - `<`: `&lt;` 으로 표시
**  - `>`**: `&gt;` 으로 표시

```html
<h1>html5 구조 요소들</h1>
<p>&lt;header&gt;, &lt;section&gt;, &lt;footer&gt;, &lt;nav&gt;, &lt;article&gt;, &lt;aside&gt; </p>
<p><strong>html5 구조 요소를 이용한 마크업 예시</strong></p>
<div>
    <iframe src=" ex1-37.html" title="반응형웹" width="500" height="500"></iframe>
</div>
```

# 끝 :smile:
