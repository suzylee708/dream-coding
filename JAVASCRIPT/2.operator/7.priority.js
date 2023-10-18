let a = 2;
let b = 3;

let result = a + b * 4; // 14 = 연산자에도 우선순위가 있기 때문!!
console.log(result);

result = a++ + b * 4;// 14
console.log(result);
console.log(a);