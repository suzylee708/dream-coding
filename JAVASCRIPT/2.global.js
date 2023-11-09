//전역적으로 사용할수있음 globally

console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(this);

//전역적으로 사용할수 있는 유용한 함수들
eval('const num = 2; console.log(num);');
console.log(isFinite(undefined)); //false
console.log(parseFloat('4.5'));
console.log(parseInt('12.6')); //12

const URL = 'https://메롱.com';
const encoded = encodeURI(URL);
const decoded = decodeURI(encoded);
console.log(decoded);

const part = '메롱.com';
const encodedPart = encodeURIComponent(part);
console.log(encodedPart);
