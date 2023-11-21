// 배열에서 아이템을 추가하고 삭제하는 방법
// 배열을 만들때는 Array 클래스를 이용하기 보다는, array 리터럴을 자주 사용한다.

const fruits = ['🍌', '🍎', '🍇', '🍑']; // 과일들이 담겨있는 배열

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // 배열 이름에 인덱스를 지정 (배열은 항상 0부터 시작)

console.log(fruits.length); // 배열에 .을 찍으면 다양한 함수들과 속성들이 나옴
// length는 배열안에 몇개의 아이템이 들어가 있는지 확인가능

// 하나씩 접근하면 배열의 아이템이 추가될때마다 일일히 해야함
//for loop을 이용하면 간편하게 짧은 코드로 모든 아이템을 하나씩 출력 가능

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제하는 방식 (좋지않은 방식)
// const fruits = ['🍌', '🍎', '🍇', '🍑'];

//인덱스로 접근하는 방법
// fruits[4] = '🍓';
// console.log(fruits);
// // 인덱스로 접근해서 이미 들어있는 아이템에 추가를 한다면 덮어씌워짐
// fruits[6] = '🍓'; // 이렇게 해버리면 중간에 비어있는 아이템이 생김
// console.log(fruits); //[ '🍌', '🍎', '🍇', '🍑', '🍓', <1 empty item>, '🍓' ]

//제일 마지막에 추가하고 싶다면
fruits[fruits.length] = '🍓'; // fruits.length에 추가를 하면 제일 마지막에 추가가 됨
console.log(fruits);

// 삭제시 안좋은 방법 - delete사용
delete fruits[1]; // 오브젝트에서 key를 삭제할때 사용했던 keyword delete를 사용
console.log(fruits); // 삭제되고 중간에 empty item으로 남아있다
