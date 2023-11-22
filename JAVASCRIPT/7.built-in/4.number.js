const num1 = 123;
const num2 = new Number(123); //메모리를 많이 잡아먹기 때문에 잘 안씀

console.log(num1); // 123 -> 원시타입: number
console.log(num2); // [Number: 123] -> 객체타입: object

console.log(Number.MAX_VALUE); // e+308: 10의 108승 = 정수에서 쓸수있는 최고의 값
//언제사용?
//변수가 숫자가 인지 아닌지 비교할때 사용 특정한 숫자가 범위안에 있는지 없는지 확인하고 싶을때
if (num1 === Number.NAN) {
}
//정적함수 메소드를 이용하는 방법
if (Number.isNaN(num1)) {
}

//지수 표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //1.02e+2 / e+2 = 10의 2승 1.02 x 100 = 102
// 큰 숫자를 지수표기로 만드는게 toExponential() 함수이다

//반올림하여 문자열로 변환 //반올림한 정수값을 문자열로 변환하고 싶다면
const num4 = 1234.44;
console.log(num4.toFixed()); //1234 : 실수가 정수로 반환되어서 문자열로 반환

//숫자 자체를 문자열로 반환
console.log(num4.toString()); //1234.44

//숫자를 그 나라에 맞는 숫자를 표기하고 싶다면
console.log(num4.toLocaleString('ar-EG'));

//원하는 자릿수까지 유효하도록 반올림하는 함수
console.log(num4.toPrecision(5)); //1234.4 다섯자리수까지 표현하고 싶다.
console.log(num4.toPrecision(2)); //1.2e+3 1.2 x 1000 = 1200
//^전체 자릿수 표기보다 작은 숫자를 입력시에 지수표기법으로 반환

//
console.log(Number.EPSILON); // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 우리가 생각할때는? -> 0.1 예상
console.log(num); // 0.10000000000000003
// 왜냐하면 0.1 / 0.2 / 이거를 Javascrip에서는 2진수로 각각 변환을 해서
// 더하고 빼기 연산을 한다음에 2진수를 다시 10진수로 반환
// 결론은 이런 과정에서 정확하게 부동소수점까지 계산되지 않음
// 그래서 0000000000000003 작은 오차가 발생하는데
// 이런 작은 오차가 EPSILON

// 함수 똑같은지 아닌지 검사하는 isEqual
function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.1)); //false!!! 왜냐하면 num은 00003 이 있기 때문

// 작은 미세한 차이를 차이로 간주하고 싶지 않다면
function isEqual(original, expected) {
  return original - expected < Number.EPSILON;
  //original에서 expected를 뺀 값이 엡셀론보다 작은 값이라면
}
console.log(isEqual(num, 0.1)); //ture

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
  //-했을때, 마이너스 값이 나오지 않도록 Math에 있는 절대값 함수를 이용해서
  //이 절대값이 엡셀론보다 작은지 아닌지 검사하면 된다
}
