// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적은 함수를 조금 더 이해하려고 합니다.
// * 매개변수가 객체인 경우가 아래에 작성될 예정입니다.

// function workone(a, b) {
// // 매개 변수 두개를 받은 다음
// // return은 객체였으면 좋겠음
//  let localVariable = {};
//  localVariable[a] = a;
//  localVariable[b] = b;
// return localVariable;
// };

// let test = workone("유으뜸","euddeum");
// console.log(test);

function workone(a, b) {
  // 매개 변수 두개를 받은 다음
  // return은 객체였으면 좋겠음
  // 매개변수가 모두 문자열이여야 한다. 조건문 걸어줌
  if (typeof a === "string") {
    if (typeof b === "string") {
      let localVariable = {};
      localVariable[a] = a;
      localVariable[b] = b;
      return localVariable;
    } else {
      console.error("문자열로 바꿔줘");
    }
  } else {
    console.error("문자열로 바꿔줘");
  }
}

let test = workone(1, 2);
console.log(test);

// // * 변수 하나를 객체로 만드는것

// let obj = {};
// const a = "테스트";

// obj[a] = a;
// console.log(obj);
