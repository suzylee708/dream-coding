// while

let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive){
    console.log('still alive');
    if(i === 5){
        break;
    }
    i++
}