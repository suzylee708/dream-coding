//boolean True or False

let isFree = true;
let isActivated = false;
let isEnrolled = true;

console.log(isFree);
console.log(isActivated);

console.clear(); //erase log before
// Falshy 거짓인 값
console.log(!!0); //false
console.log(!!-0);
console.log(!!''); //텅텅빈 문자열
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{}); //오브젝트 비어져있어도 object 자체가 있기때문에 true
console.log(!!-Infinity); // 유한대를 나타내는 Infinity 도 true