// 배열 생성 방법

// new array라는 array class 생성자를 이용
//사이즈를 정해서 비어있는 배열을 만드는 방법
let array = new Array(2); // 사이즈를 지정할 수 있음: 2개의 아이템을 저장할 수 있는 배열
console.log(array); //[ <2 empty items> ]

// 만들고 싶은 아이템을 바로 전달하는 방법
array = new Array(1, 2, 3);
console.log(array);

// static 함수를 이용하는 방법
// Array.of() : Returns a new array from a set of elements
array = Array.of(1, 2); // 원하는 갯수만큼 무한정 전달가능
console.log(array);

// 배열 리터럴을 이용하는 방법 대괄호 이용[]
const anotherArray = [1, 2, 3, 4, 5];
console.log(anotherArray);

// Array.from() : 기존 배열부터 새로운 배열을 만들고 싶을때
// Crates an array from an iterable object (순회가 가능한 object: 배열, 문자열 등등)
array = Array.from(anotherArray); // 기존 배열을 그대로 복사하여 새롭게 만들어줌
console.log(array);

array = Array.from('text'); // 문자열
console.log(array); //[ 't', 'e', 'x', 't' ]

// 자바스크립트에서 중요한 컨셉:
// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않다. 즉 보장이 안됨.
// 오브젝트와 유사함.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다.
// 이것을 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)

//Array.from() 을 이용하여 Object로부터 배열을 만들어 보는 방법
array = Array.from({
  //object에 key가
  0: 'h', //0번 key는 h 지정 (0= 인덱스 key)
  1: 'i', // 1번 key에는 i를 지정 후
  length: 2, // 배열에는 길이라는 정보가 있는데 length라는 key에 2로 배열의 크기를 지정
});

console.log(array); //[ 'h', 'i' ]
