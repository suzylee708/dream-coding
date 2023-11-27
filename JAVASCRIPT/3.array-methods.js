// // 배열의 함수들
// // 배열 자체를 변경하는지? 아님 새로운 배열을 반환하는지?

// const fruits = ['🍌', '🍎', '🍇'];

// // 특정한 오브젝트가 배열인지 아닌지 체크
// console.log(Array.isArray(fruits)); //Array에 있는 static함수를 이용
// // 오브젝트를 전달하면 그 오브젝트가 배열이라면 true 반환 아니면 false반환
// console.log(Array.isArray({})); // 빈 오브젝트를 전달하면 false

// // 특정한 아이템의 위치를 찾을때
// console.log(fruits.indexOf('🍎')); // 1 만들어진 배열에 (instance level)에 indexOf 라는 함수를 사용하여 찾고자 하는 아이템을 전달

// // 배열안에 특정한 아이템이 있는지 체크
// console.log(fruits.includes('🍎')); //true

// // 추가 하는 방법 (제일 뒤에 추가)
// fruits.push('🍓'); //push라는 API를 이용하면 새로운 아이템 맨 뒤에 추가
// // push는 배열 자체를 수정 (업데이트) = 기존 배열에 아이템을 추가하고 길이만 리턴
// console.log(fruits); //[ '🍌', '🍎', '🍇', '🍓' ]
// console.log(fruits.length);

// // 추가 하는 방법 (제일 앞에 추가)
// fruits.unshift('🍉'); //push와 동일하게 추가하고 난 길이를 리턴.
// // unshift도 배열 자체를 수정 (업데이트) 하는 함수
// console.log(fruits);

// //제거 - item 제일 뒤를 제거
// let lastItem = fruits.pop(); // 제일 뒤에 있는 아이템 하나를 제거하려면, pop이라는 api를 사용
// // pop은 배열 자체를 수정하고 (=아이템을 제거하고), 제거된 아이템을 리턴해줌
// // pop을 하고 반환된 아이템 (=lastItem)은 제일 마지막에서 제거된 아이템
// console.log(fruits);
// console.log(lastItem);

// //제거 - item 제일 앞을 제거
// lastItem = fruits.shift();
// console.log(fruits);
// console.log(lastItem);

// // 중간에 추가 또는 삭제
// fruits.splice(1, 1); // 시작하는 인덱스(1)에 하나 (1)를 삭제할거야
// console.log(fruits); // 1번째 item 1개 삭제
// fruits.splice(1, 0, '❤️'); // 첫번째부터 시작해서, 하나도 삭제하지 않고, 하트를 추가
// console.log(fruits); //

// console.clear();
const fruits = ['B', 'A', 'G'];

// 새로운 배열을 만드는 함수들
// 잘라진 새로운 배열을 만드는 Api = .slice() 새로운 배열을 return
let newArr = fruits.slice(0, 2); //어디서부터 슬라이스 할건지, 어디까지 할건지
//시작하는 인덱스 0은 포함이고, 끝나는 인덱스는 제외 (= 0, 1)
console.log(newArr); // 기존 배열에서 인덱스 0, 1 인 새로운 배열을 return한다
console.log(fruits); // 기존의 배열은 바뀌지 않음
// slice라는 것은 기존의 배열을 그대로 유지하는 상태로 잘라진 새로운 배열을 return한다
// .slice() 이렇게 아무것도 지정해주지 않으면 0부터 시작 = 전체가 slice된다
newArr = fruits.slice(); //아무것도 전달하지 않으면
console.log(newArr); // 배열 전체가 반환
newArr = fruits.slice(-1); // 제일 뒤에서 한칸 땡겨진 아이템부터 slice (?)
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // arr1의 concat을 호출해서 arr2를 전달하면 두개가 합쳐진 arr3 새로운 배열을 return
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열의 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 배열안에 또다른 배열이 있다면 중첩된 배열을 하나의 flat한 배열로 쫙펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr);
console.log(arr.flat()); // flat은 한단계까지만 풀어줌
console.log(arr.flat(2)); // 2단계까지 풀고 싶다면 지정할 수 있다
// flat은 새로운 배열 return하지 않고 기존의 배열을 update함

//특정한 값으로 배열을 채우는 방법
arr = arr.flat(2);
arr.fill(0); // 모든 아이템을 0으로 채우겠다
console.log(arr); //[ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3); // s로 채울건데, 1부터 3까지 채울거야 대신 끝은 포함되지 않는다
console.log(arr); //[ 0, 's', 's', 0, 0, 0 ]

arr.fill('s', 1); // s로 채울건데, 1부터 채울거야 start만 지정하면 끝까지 채워짐
console.log(arr); //[ 0, 's', 's', 's', 's', 's' ]
// fill은 배열 자체를 수정

// 배열을 문자열로 합하기
let text = arr.join(); //배열안의 모든 item들이 , 를 이용해서 문자열로 변환
console.log(text); //0,s,s,s,s,s
// , 말고 다른걸로 나누고 싶다면
text = arr.join(' | '); //
console.log(text); // 0 | s | s | s | s | s
