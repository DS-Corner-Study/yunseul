//2. 변수와 상수
//기호 사용 규칙 
let $age=25;;  //$: 이 변수가 별도의 라이브러리 객체이다
let human_age=25;  //변수 이름이 두 단어 이상으로 이루어짐
let _2022year = "good";//변수 이름에 숫자를 사용하려면 특수 기호와 함께



//3. 자료형
//백틱을 이용한 문자열 '템플릿 리터럴'
let name = "정지민";
let location = "잠실";
let introduce = `${name}은 ${location}에 살고 있습니다.`;

console.log(introduce); // 정지민은 잠실에 살고 있습니다.


//4. 형변환
//parseInt:문자열에서 숫자만 추려 반환
// 문자열이 숫자가 아닌 문자로 시작하면 NaN 반환
let str="파이팅 2023";
let num=perseInt(str,10);

console.log(num); //NaN


//삼항 연산자
let num = 1;
num%2===0 ? console.log("짝수") : console.log("홀수");



//5. 연산자
//전위, 후위 연산자
let a=1;
console.log(a++); //1 후위 연산자
console.log(++a); //3 전위 연산자


//비교연산자
//=== :같다
//!== : 같지 않다
//== : 연산자의 값만 비교할 뿐 자료형은 비교하지 않음, !=도 마찬가지


//null 병합 연산자: 값이 확정된 변수를 찾을때
let varA=10;
let varB=20;
let verC;

console.log(varA??varV); //둘다 확정되면 왼쪽값 반환
console.log(varC??varB); //c가 확정되지 않아 확정된 B값 반환


//(활용) user에 사용자의 이름이있다면 이름을, 없다면 닉네임을 저장하세요
let name;
let nickname="winter";
let user=name??nickname;

console.log(user); //winter


//삼항 조건 연산자
//조건식 ? 참일때수행 : 거짓일때 수행
let num=1;
let result = num%2===0?"짝수": "홀수";



//6. 조건문
//조건의 개수가 많고 수행 식 짧다 : switch
//조건문 많지 않고 수행 식 길다: if



//7. 반복문



//8. 함수
//중첩함수
function greeting(){
    function greetingWithName(name){
        console.log('hello! ${name}');
    }
    let neme="정지민";
    greetingWithName(name);
}
greeting();


//함수와 호이스팅: 변수나 함수 접근 코드가 함수 선언보다 위에 있음에도 동작함
func();
function func(){
    console.log("hello");
}


//함수 표현식: 함수를 생성하고 변수의 값으로 저장
//호이스팅 안됨
let greeting = function(){
    console.log("hello");
};

greeting();


//콜백 함수
//익명함수를 직접 인수 형태로 전달
function repeat(count,callBack){
    for(let idx=0;idx<<count;idx++){
        callBack(idx+1);
    }
}

repeat(5,function(count){ //함수 repeat를 호출하며 첫 번째 인수로는 숫자 5, 두 번째 인수로는 콜백 함수로 활용할 익명 함수를 직접 생성해 전달합니다. 
    //그럼 익명 함수는 함수 repeat의 매개변수 callback에 저장되어 repeat 내에서 호출할 수 있게 됩니다.
    console.log(count*2);
})


//화살표 함수
//let funcA = (매개변수)=>반환값;
let greeting = (name) => `hello ${name}`;
const greetingText = greeting("정지민");

console.log(greetingText); // hello 정지민

//화살표 본문에 중괄호를 사용하면, 반환시 return문 써주어야함
let greeting = (name) => {
    let greetingText = `hello ${name}`;
    return greetingText;
};

console.log(greeting("정지민"));// hello 정지민


//콜백함수 다른 예
let isConfirm = true;

function confirm(onYes, onNo) {
if (isConfirm) onYes();
else onNo();
}

confirm(
    () => console.log("승인"), // 함수 confirm의 첫 번째 인수로 콘솔에 ‘승인’을 출력하는 화살표 함수를 전달합니다. 이 함수는 매개변수 onYes에 저장됩니다. 
    () => console.log("거부") // 
);// 승인



//9. 스코프
//let, const: 블록 스코프
//var : 함수 스코프



//10. 객체
//특정 프로퍼티의 존재 여부 확인 예제
let obj = {
    a: 1
};

let isPropertyExist = obj.b !== undefined; // obj.b는 존재하지 않는 프로퍼티에 대한 접근이므로 undefined를 반환합니다. 
//따라서 undefined가 맞으므로 변수 isPropertyExist의 값은 false가 됩니다.

console.log(isPropertyExist); // false


//in 연산자
let person = {
    age: 10
};

let isNameExist = "name" in person; // ①

console.log(isNameExist); // false



//11. 배열