# 1. CSS3

## 2.1 CSS 기본 문법

**CSS(Cascading Style Sheets)**를 정의하는 방법
- 내부 스타일시트: 간단하게 할 때
- 외부 스타일시트: 구조화해서 정의
- 인라인 스타일시트: 거의 사용x, 가장 우선순위가 높아서 꼭 필요한 경우

주석은 `/* */`로 표현

### 2.1.1 내부 스타일시트

CSS를 HTML 문서 안에 `<style>` 태그로 기재해 HTML 문서 안에 CSS가 함께 저장

```html
<head>
    <style type="text/css">
        p {
            color: red;
        }
    </style>
</head>

<body>
    <p>우리를 기쁘게 하는 것들.</p>
</body>
```

### 2.1.2 외부 스타일시트

스타일 속성들을 따로 저장해 HTML 문서에 파일명으로 연결 가능
- 이 때 스타일은 `*.css` 확장자 파일로 저장하고 HTML 에서는 `<link>` 태그를 이용해 선언
- 외부 스타일시트는 그 스타일을 선언한 모든 HTML 페이지에 적용
- 내부 스타일시트는 그 스타일이 기술된 페이지에만 적용

```html
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
    <p>우리를 기쁘게 하는 것들.</p>
</body>
```

CSS 파일 상단에는 `@charset "utf-8";` 등, html 문서에서 지정한 것과 동일한 문자셋을 지정

```css
@charset "utf-8";
```

### 2.1.3 @import

`@import`는 CSS 안으로 다른 CSS 파일을 불러들일 경우 사용

```html
<head>
    <style type="text/css">
        @import url("style.css");
    </style>
</head>

<body>
    <p>우리를 기쁘게 하는 것들.</p>
</body>
```

공통 CSS를 불러들일 경우에도 사용 가능
- 공통으로 들어가야 할 스타일을 따로 저장해 다른 CSS에 삽입시켜 사용할 수 있도록 해줌
- CSS 파일을 너무 여러 개로 분리하면 오히려 복잡해져 유지보수하기 힘든 부분도 있음

```css
@charset "utf-8";
@import ulr("common.css");
```


### 2.1.4 인라인 스타일(inline style)

태그에 직접 CSS를 정의해주는 기법, `style=" "` 형식으로 기술
- 인라인 스타일은 우선순위가 절대적으로 높아야 할 경우에 사용
- 스타일을 공통 CSS로 수정 불가, html을 열어서 편집해야 함으로 일반적으로는 사용x

## CSS 가 필요하면 업데이트

나중에 디자인이 궁금하면 더 공부할 예정
