function add(a=1, b=1){
    console.log(a);
    console.log(b);
    return a + b;
}
add (2,2);
console.log(add(2,2));

function sum(...numbers){
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8);