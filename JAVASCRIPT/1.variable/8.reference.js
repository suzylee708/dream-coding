// primitive 타입은 값이 복사되어 전달됨

let a = 1;
let b = a;

b = 2;
console.log(a)
console.log(b)

// object 타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = {
    name: 사과
};
