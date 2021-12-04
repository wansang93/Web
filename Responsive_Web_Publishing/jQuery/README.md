# jQuery

## 4.1 jQuery 연결 방법

- jQuery를 사용하기 위해서 jQuery 라이브러리를 웹페이지에 연결해서 사용해야 함
  - 연결 방식
    - Download받아 연결
    - CDN(Content Delivery Network), 각 버전별로 브라우저 지원이나 기존 메서드들의 지원 여부등 차이
    - (책에 없음)Google OpenSource JavaScript Library로 jQuery 사용하기 링크 -> [https://developers.google.com/speed/libraries](https://developers.google.com/speed/libraries)
- 현재 1.x, 2.x, 3.x 버전을 지원
- 각 버전별로 브라우저 지원이나 기존 메서드들의 지원 여부 등의 차이가 있음
  - 만약 IE8 이하, Opera 12.1x, Safari 5.1이상을 대응하는 jQuery 라이브러리를 사용해야 한다면 1.12.x 버전 사용해야 함
- jQuery 라이브러리 파일 형식은 compressed(압축) 파일과 uncompressed(비압축) 파일이 있음
  - 라이브러리 설명에 대한 주석 차이만 있을 뿐 기능적 차이x
  - 라이브러리에 대한 설명은 크게 필요없기 때문에 압축 파일 사용

### 4.1.1 Download 방식

- 크롬 브라우저에서는 jQuery 라이브러리를 복사해야 하는 번거로움, 다른 웹브라우저에서 다운받아 쓰세요.
  - 크롬에서 다운 받을 경우 라이브러리 코드 전체를 복사, 웹 에디터에 붙여 넣고 jquery-3.3.1.min.js로 저장

1. jQuery 라이브러리 다운로드

   [http://jquery.com/download](http://jquery.com/download)에 접속해서 다운로드

2. HTML 문서에서 jQuery 라이브러리 연결하기

   html 문서를 jQuery 라이브러리와 같은 경로에 저장

   ```html
   <head>
      <meta charset="UTF-8">
      <title>jQuery 라이브러리 연결</title>
      <script src="jquery-3.5.1.min.js"></script>
      <script>
         $(document).ready(function () {
               console.log('jQuery 시작');
         });
      </script>
   </head> 
   ```

### 4.1.2 CDN 방식

1. CDN 카피하기
   1. jQuery 사이트 링크 -> [https://code.jquery.com](https://code.jquery.com)
   2. 해당 버전의 `uncompressed` 클릭해서 복사
2. HTML 문서에서 jQuery 라이브러리 연결하기

   ```html
   <script src="https://code.jquery.com/jquery-3.5.1.js"
   integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
   crossorigin="anonymous"></script>
   ```

### 4.1.3 jQuery Migrate Plugin

버전 차이 문제 발생 해결을 위해 jQuery Migrate Plugin을 제공

- jQuery 라이브러리 1.9버전에서 이전에 사용되던 메서드들이 삭제, 변경 됨
- jQuery 라이브러리를 업데이트하면 일부 기능 실행되지 않음, 문제 발생

1.9 이전, 이후 버전에 따라 jQuery Migrate Plugin 버전을 선택

- 링크 -> [https://jquery.com/download/#jquery-migrate-plugin](https://jquery.com/download/#jquery-migrate-plugin)
- 링크에 들어가서 다운로드 후 아래 코드로 연결(예시)

  ```html
  <script src="jquery-3.5.1.min.js"></script>
  <script src="jquery-migrate-1.4.1.min.js"></script>
  ```

### 4.1.4 jQuery 기본 형식

```html
<script>
    // 방법1
    $(document).ready(function () {
       실행문;
    });


    // 방법2
    $(function () {
       실행문;
    });
</script>
```

jQuery는 기본적으로 `$(documnet).ready()`로 시작

- ready()는 jQuery 이벤트로 앞에서 학습한 자바스크립트의 load 이벤트와 유사한 기능 가짐

---

## jQuery 가 필요하면 업데이트

jQuery를 배워야 할까? 링크 -> [노마더 코더 Should you learn jQuery in 2019?](https://www.youtube.com/watch?v=6FnkGKYK6iQ)

- 결론: 배우지 마세요, 단 필요한 경우 JavaScript 배우고 배우세요
