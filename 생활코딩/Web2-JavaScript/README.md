# Web2-JavaScript

- 21-01-16 ~ 21-01-16 Finished

유튜브 링크 -> [https://www.youtube.com/playlist?list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf](https://www.youtube.com/playlist?list=PLuHgQVnccGMBB348PWRN0fREzYcYgFybf)

## 1, 2. Introduction

## 3. HTML meets JS: script tag

html 위에 js로 글자 쓰기

```html
<script>
    document.write(1+1);
</script>
```

## 4. HTML meets JS: Event

html 위에 이벤트 하기

```html
<body>
    <input type="button" value="hi" onclick="alert('hi')">
</body>
```

html 문서에는 onclick 뒤에 js로 실행된다고 함, onclick이 이벤트이고 이를 여러개 정의해 놓음

Event 보기 링크 -> [https://www.w3schools.com/tags/ref_eventattributes.asp](https://www.w3schools.com/tags/ref_eventattributes.asp)

on 속성들을 Event라고 함

## 5. Console(페이스북 그룹 추첨)

[참고]페이스북 API 활용 댓글 추첨 기능 유튜브 링크 -> [https://www.youtube.com/watch?v=0K8_9DQLoLU](https://www.youtube.com/watch?v=0K8_9DQLoLU)

수업시간 코드

```javascript
let 당첨자수 = 2;
// 댓글선택자 부분을 이해하면 가능할 듯?
let 댓글선택자 = 'cwj9ozl2>div>.UFIComment.UFICommentActorName';

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

var list = [];
document.querySelectorAll(댓글선택자).forEach(function (e) {
    list.push(e.innerText);
});

list = list.filter((v, i, a) => a.indexOf(v) === i);

shuffle(list)
console.log(list.slice(0, 당첨자수));
```

## 6, 7. Data types, Variables and Assignment Operators

See Data types Link -> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## 9~12. CSS

## 13. Controlling a Web Browser

```html
<!DOCTYPE html>
<html lang="kr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB2 - JavaScript</title>
</head>

<body>
    <h1><a href="test.html">WEB</a></h1>
    <input type="button" value="night" onclick="
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
    ">
    <input type="button" value="day" onclick="
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
    ">
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ol>
    <h2>JavaScript</h2>
    <p>
        JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviated as JS, is a programming language that conforms to the
        ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has
        curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
    </p>
</body>

</html>
```

## 14 ~ 17. Conditional Statements, Comparison Operators and Boolean data type

```html
<input id="night_day" type="button" value="night" onclick="
    if (document.querySelector('#night_day').value === 'night') {
        document.querySelector('#night_day').value = 'day';
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
    }
    else {
        document.querySelector('#night_day').value = 'night';
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
    }
```

## 18. Refactoring - Removing duplicates

```html
<input type="button" value="night" onclick="
    target = document.querySelector('body')
    if (this.value === 'night') {
        this.value = 'day';
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
    }
    else {
        this.value = 'night';
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
    }
">
```

## 19 ~ 23. Arrays and Loop Statements

```javascript
var i = 0;
while (i < alist.length) {
    alist[i].style.color = 'powderblue';
    i = i + 1;
```

## 24 ~ 28. Fuctions

```html
<script>
    function LinksSetColor(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }

    function BodySetColor(color) {
        document.querySelector('body').style.color = color;
    }

    function BodySetBackgroundColor(color) {
        document.querySelector('body').style.backgroundColor = color;
    }

    function nightDayHandler(self) {
        var target = document.querySelector('body');
        if (self.value === 'night') {
            self.value = 'day';
            BodySetBackgroundColor('black');
            target.style.color = 'white';

            LinksSetColor('powderblue');
        } else {
            self.value = 'night';
            BodySetBackgroundColor('white');
            target.style.color = 'black';

            LinksSetColor('blue');
        }
    }
</script>
```

## 29 ~ 33. Object

```html
<script>
    var Body = {
        setColor: function (color) {
            document.querySelector('body').style.color = color;
        },
        setBackgroundColor: function (color) {
            document.querySelector('body').style.backgroundColor = color;
        },
    }
    
    var Links = {
        setColor: function (color) {
            var alist = document.querySelectorAll('a');
            var i = 0;
            while (i < alist.length) {
                alist[i].style.color = color;
                i = i + 1;
            }
        },
    }

    function nightDayHandler(self) {
        if (self.value === 'night') {
            self.value = 'day';
            Body.setBackgroundColor('black');
            Body.setColor('white');

            Links.setColor('powderblue');
        } else {
            self.value = 'night';
            Body.setBackgroundColor('white');
            Body.setColor('black');

            Links.setColor('blue');
        }
    }
</script>
```

## 34. Organizing code into files

JS 파일로 빼내기

## 35. Libraries and Frameworks

jQuery 맛보기

[참고] Difference between Library and Framework Link -> [https://www.youtube.com/watch?v=t9ccIykXTCM](https://www.youtube.com/watch?v=t9ccIykXTCM)

## 36. UI(User Interface) vs API(Application Programming Interface)

## 37. Conclusion

검색 팁

- `documnet`: 어떤 태그에 자식 태그를 추가하고 싶으면
- `DOM`: document로 찾기 힘들면 DOM으로 검색
- `window`: 웹브라우저를 제어하고 싶으면
- `ajex`: 웹을 리로드하지 않고 정보를 변경하고 싶으면
- `cookie`: 웹이 리로드 돼도 현재상태 유지하려면
- `offline web application`: 인터넷이 끊겨도 동작하고 싶으면
- `webRTC`: 화상 통신
- `speech`: 음성 인식 및 음성으로 정보 전달하고 싶으면
- `webGL`: 3차원 게임 만들고 싶으면
- `webVR`: 가상현실에 관심이 있으면

## 끝 😀
