//객체 동적으로 접근하기

const obj = {
    name: 'suji',
    age: 20,
};

console.log(obj.name);
obj.age;

//동적으로 접근하고 싶을때 대괄호 표기법 사용
function getValue(obj, key){
    return obj[key];
}
console.log(getValue(obj, ['name']));

function addKey(obj, key, value){
     obj[key] = value; //return  안넣어도 되나?
}
addKey(obj, 'job', 'engineer')
// console.log(addKey(obj, 'job', 'engineer')); //engineer
console.log(obj);// 

