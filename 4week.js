1. 초기화된 패키지의 package.json에는 기본적으로 다음 항목들이 존재합니다.
name: 패키지 이름 
version: 패키지 버전 
description: 패키지 설명(보통 패키지로 구성한 프로그램의 목적을 작성) 
main: 패키지의 소스 코드 파일 중 메인 역할을 담당하는 소스 코드 파일 
scripts: 패키지를 쉽게 다루기 위해 지정한 매크로 명령어 
author: 패키지를 만든 사람 
license: 패키지의 라이선스

2. 자바스크립트에서는 독립된 하나의 파일을 ‘모듈’이라고 부릅니다.


3. 필요한 값이나 함수를 내보내면 이제 다른 파일(모듈)에서 불러와 사용할수 있습니다.
const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

export { PI, getArea, getCircumference }; ①


4. 전부 불러오기
ESM에서는 불러올 값이 많다면, import * as A from B 형식으로 모듈이 내보낸 값을 한 번에 불러올 수 있습니다.

5. 리액트의 3가지 특징
- 컴포넌트 기반의 유연성
- 쉽고 간단한 업데이트
- 버추얼 돔을 이용한 효율적인 업데이트: 리액트에서는 페이지에서 변경 사항이 발생하면 먼저 버추얼 돔을 업데이트하는 식으로 변경 사항을 모았다가 한 번에 실제 돔을 업데이트합니다.


6. Create React App: 자동으로 생성한 템플릿 파일과 폴더
package.json에서 ‘dependencies’ 항목을 보면 Create React App으로 생성한 리액트 앱에는 어떤 라이브러리가 설치되었는지, 리액트 버전은 몇 버전인지 등에 대한 정보가 들어 있음을 알 수 있습니다.
public 폴더는 리액트에서 공통으로 사용하는 폰트 파일, 이미지 파일 등을 저장하는 폴더이다.
src 폴더는 소스(source) 폴더라는 뜻으로 프로그래밍 소스를 저장하는 폴더이다.

7. start 스크립트를 실행: npm run start

8. 리액트 앱의 주소: http://localhost:3000

9. 실행 중인 리액트 앱을 종료하는 방법: <Ctrl>+<C>


10. 어떤 원리로 리액트 앱에 접속하는 걸까
Create React App으로 만든 리액트 앱에는 웹 서버가 내장되어 있습니다. 즉, npm run start 명령을 실행하면 브라우저가 리액트 앱에 접속하도록 앱에 내장된 웹 서버가 동작합니다. 결국 내장된 웹 서버 주소로 브라우저가 자동으로 접속합니다.

11. localhost 뒤에 콜론(:)과 함께 나오는 3000은 포트(port) 번호입니다. 포트 번호는 컴퓨터에서 실행되고 있는 서버를 구분하는 번호입니다. 

12. 함수 App처럼 HTML을 반환하는 자바스크립트 함수를 컴포넌트라고 했습니다. 컴포넌트는 이름과 함께 부르기 때문에 이제부터 App 컴포넌트라고 하겠습니다.

13. bundle.js는 src 폴더에 있는 index.js와 이 파일이 불러온 모듈을 하나로 묶어놓은 파일입니다. 결국 이 번들 파일은 index.js가 작성한 코드에 따라 동작합니다. 따라서 index.js에 어떤 내용이 있는지 살펴봐야 리액트 앱의 동작을 제대로 이해할 수 있습니다.

14. index.js에서는 import 문으로 App.js에 있는 App 컴포넌트를 포함해 여러 개의 모듈을 불러옵니다.


15. 리액트 앱의 동작 방식을 다시 한번 정리하면 다음과 같습니다.
- localhost:3000으로 접속을 요청하면 public 폴더의 Index.html을 반환합니다.
- index.html에는 src 폴더의 index.js와 해당 파일이 가져오는 자바스크립트 파일을 한데 묶어 놓은 bundle.js를 불러옵니다. <script> 태그에서 자동으로 추가합니다.
- bundle.js가 실행되어 index.js에서 작성한 코드가 실행됩니다.
- Index.js는 ReactDOM.createRoot 메서드로 돔에서 리액트 앱의 루트가 될 요소를 지정합니다.
- render 메서드를 사용해 돔의 루트 아래에 자식 컴포넌트를 추가합니다. 결과적으로 App 컴포넌트가 렌더링됩니다.