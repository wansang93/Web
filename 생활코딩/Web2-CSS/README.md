# Web2-CSS

- CSS 강의(16강) 유튜브 링크 -> [https://www.youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B](https://www.youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B)
- CSS 강의(61강) 유튜브 링크 -> [https://www.youtube.com/watch?v=ONcmkf07EuI&list=PLuHgQVnccGMDaVaBmkX0qfB45R_bYrV62](https://www.youtube.com/watch?v=ONcmkf07EuI&list=PLuHgQVnccGMDaVaBmkX0qfB45R_bYrV62)

## 16강 강의

- 2021-01-12 ~ 2021-01-13 Finished

2배속 ~ 4배속으로 빠르게 들었습니다. 중요한 부분은 1배속으로 들으며 필기 요약해 봤습니다.

### CSS

html이 정보의 기능, css는 디자인 기능으로 대게 구성

```html
<style>
    /* 태그 */
    a {
        color: red;
        text-decoration: none;
        display: block;
    }
    h1, a{
        border-width: 5px;
        border-color: red;
        border-style: solid;
    }
    /* 위와 동일하게 설정 가능 */
    h1, a{
        border: 5px solid red;
    }
    h2 {
        padding: 20px;
        margin: 10px;
    }

    /* 클래스 */
    .saw {
        text-align: center;
        display: inline;
    }
    /* 아이디 */
    #myid {
        font-size: 45px;
    }
</style>
```

### CSS 박스 모델

블록 라인 요소와 인라인 요소는 사실 display의 기본 속성 값으로 언제든지 바꿀 수 있음

CSS 박스 모델: HTML 태그 하나하나를 박스로 취급해서 부피감 등 디자인을 결정

### 그리드

Can I use 링크 -> [https://caniuse.com/](https://caniuse.com/)

- 웹 브라우저들이 얼마나 해당 기술을 채택하고 있는지 보여주는 사이트

다음 사이트에 grid를 검색하면 얼마나 사용 가능한지 보여줌

그리드 설정으로 디자인을 이쁘게 할 수 있음

### 반응형 디자인

@media: 미디어 쿼리(Media Queries)를 사용하면 더 쉽게 나타냄

디스플레이 크기마다 설정값에 맞게 디스플레이에 표시 가능

```css
@media(max-width: 800px){
  div{
    display: none;
  }
}
```

### 코드 및 트래픽 관리

**HTMl 내에 CSS 적용** vs **HTML과 CSS 파일 따로 적용**

전자가 빠르지만, 캐싱을 사용하면 후자가 더 빨라지고 효율적일 수 있음

### 16강 강의 완료 😀

---

## 61강 강의 [유튜브 링크](https://www.youtube.com/watch?v=ONcmkf07EuI&list=PLuHgQVnccGMDaVaBmkX0qfB45R_bYrV62)

- 2021-01-13

### CSS 선택자

선택자 이해하기 블로그 링크 -> [https://www.nextree.co.kr/p8468/](https://www.nextree.co.kr/p8468/)

선택자 공부를 게임으로 링크 -> [https://flukeout.github.io/](https://flukeout.github.io/)

### CSS cheat sheet

보기 -> [http://www.pxleyes.com/blog/wp-content/uploads/2010/03/css-cheatsheet.pdf](http://www.pxleyes.com/blog/wp-content/uploads/2010/03/css-cheatsheet.pdf)

### Pseudo class selector

class 선택자 처럼 동작하지만 class 선택자, id 선택자, 태그 선택자가 아님

element 상태에 따라서 선택함

```css
/* 방문된 상태 변경, 보안상 이유로 일부 속성만 사용 가능 */
a:visited{
    color:red;
}
/* 마우스가 활성화 된 상태 */
a:active{
    color: green;
}
/* 마우스를 올려놓은 상태 */
a:hover{
    color:yellow;
}
/* focus는 가장 뒤에 놓는게 좋음 */
a:focus{
    color:white;
}
```

### 61강 강의 (9강 까지 완료) 😀
