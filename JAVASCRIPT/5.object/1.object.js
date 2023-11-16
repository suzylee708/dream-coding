//object literal - 오브젝트, 객체를 만들 수 있는 방법중 하나

let apple = {
    name: 'apple',
    'hello-bye': '✋',
    0: 1,
    ['hello-bye1']: '❤️',
};

//how to approach to the properties
console.log(apple.name);
console.log(apple['hello-bye1']);
console.log(apple['hello-bye']);

//add property
apple.emoji = '🍎';
console.log(apple['emoji']);

//delete property
delete apple.emoji;
console.log(apple);
