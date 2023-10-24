let num = 2;
// if
if(num % 2 === 0) {
    console.log('👍');
} else {
    console.log('👎');
}
// ternary
num % 2 === 0 ? console.log('👍') : console.log('👎'); // 코드 반복됨

let emoji = num % 2 === 0 ? '👍' : '👎'; //코드가 간결해짐
console.log(emoji);