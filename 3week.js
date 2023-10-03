//1. 구조 분해 할당
//< 배열의 구조 분해 할당 >

let arr = [1, 2];
let [one, two, three] = arr;

console.log(one, two, three); // 1 2 undefiend

//할당할 변수의 개수가 배열의 길이보다 많아도 오류가 발생하지 않는다.
//다만 배열의 길이를 넘는 변수에는 undefined가 할당된다.



//2. 스프레드 연산자와 rest 매개변수
//< rest 매개변수 >

function func(...rest, param) { // 오류 : rest 매개변수는 마지막에 작성해야 합니다.
  console.log(param);
  console.log(rest);
}

func(1, 2, 3, 4);

//rest 매개변수는 먼저 선언한 매개변수에 할당된 인수를 제외하고 나머지를 모두 배열에 저장한다. 따라서 반드시 매개변수에서 마지막에 선언되어야 한다.



//3. 배열과 메서드
//< slice >

const arr = [1, 2, 3, 4, 5];

console.log(arr.slice(-1)); ① // [5]
console.log(arr.slice(-2)); // [4, 5]
console.log(arr.slice(-3)); // [3, 4, 5]
console.log(arr.slice(-4)); // [2, 3, 4, 5]
console.log(arr.slice(-5)); // [1, 2, 3, 4, 5]

//음숫값을 인덱스로 전달해도 된다.

//만약 end 없이 start만 음수 인덱스로 전달하면, 배열 맨 끝부터 전달한 음수의 절댓값만큼 잘라낸 새 배열을 반환한다.
//뒤에서부터 셀 때는 -1이 첫 번째 인덱스 번호이다.

< indexOf >
let arr = [{ name: "이정환" }, 1, 2, 3];

console.log(arr.indexOf({ name: "이정환" })); // -1

//</indexOf>

function determine(item, idx, arr) { ②
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



//비교함수 사용
let arr = [1, 3, 5, 6, 8];
let index = arr.findIndex(determine); ①

console.log(index); // 3

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

let arr = [10, 5, 3];
arr.sort(compare);

console.log(arr); // [3, 5, 10]


//< reduce >
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((acc, item) => acc + item, 0);

console.log(result); // 15


//4. Date 객체와 날짜

//< n월씩 이동하기 >

function moveMonth(date, moveMonth) { // ①
    const curTimestamp = date.getTime(); // ②
    const curMonth = date.getMonth(); // ③
  
    const resDate = new Date(curTimestamp); // ④
    resDate.setMonth(curMonth + moveMonth); //⑤
  
    return resDate;
  }
  
  const dateA = new Date("2000-10-10");
  console.log("A: ", dateA); // A : Tue Oct 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateB = moveMonth(dateA, 1);
  console.log("B: ", dateB); // B : Fri Nov 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateC = moveMonth(dateA, -1);
  console.log("C: ", dateC); // C : Sun Sep 10 2000 09:00:00 GMT+0900 (한국 표준시)



//< 배열에서 이번 달에 해당하는 날짜만 필터링하기 >

function filterThisMonth(pivotDate, dateArray) {  // ①
    const year = pivotDate.getFullYear();
    const month = pivotDate.getMonth();
  
    const startDay = new Date(year, month, 1, 0, 0, 0, 0); // ②
    const endDay = new Date(year, month + 1, 0, 23, 59, 59); // ③
  
    const resArr = dateArray.filter(
      (it) =>
        startDay.getTime() <= it.getTime() && // ④
        it.getTime() <= endDay.getTime()
    );
    return resArr;
  }
  
  const dateArray = [
    new Date("2000-10-1"),
    new Date("2000-10-31"),
    new Date("2000-11-1"),
    new Date("2000-9-30"),
    new Date("1900-10-11")
  ];
  
  const today = new Date("2000-10-10/00:00:00"); // 오늘은 2000년 10월 10일이라고 가정합니다.
  const filteredArray = filterThisMonth(today, dateArray);
  
  console.log(filteredArray);
  
  // 0: Sun Oct 01 2000 00:00:00 GMT+0900 (한국 표준시)
  // 1: Tue Oct 31 2000 00:00:00 GMT+0900 (한국 표준시)


//5. 비동기 처리
function orderCoffee(coffee, time) { ①
    setTimeout(() => {
      console.log(`${coffee} 제조 완료`);
    }, time);
  }
  
  orderCoffee("달콤한 커피", 4000);
  orderCoffee("레몬 티", 2000);
  orderCoffee("시원한 커피", 3000);
  
  // 레몬 티 제조 완료 
  // 시원한 커피 제조 완료 
  // 달콤한 커피 제조 완료

