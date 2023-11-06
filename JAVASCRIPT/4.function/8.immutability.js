//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는것은 안됨
// 상태 변경이 필요한 경우에는 새로운 상태를 (오브젝트, 값) 만들어서 반환해야함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 ()

function display(num) {
  num = 5; // 이렇게 코딩하면 절대 안됨
  console.log(num);
}
const value = 4;
display(value);//5
console.log(value);//4

function displayObj(obj){//보여준다고(=displayobj) 해놓고 엉뚱한 일(=name 변경)을 한것은 잘못된거임
    obj.name = 'bob';//변경하는 순간 모든 변수들의 업데이트가 적용됨
    console.log(obj);
}
const suji = {name: 'suji'};
displayObj(suji);//bob
console.log(suji);//bob


//변경하려면
function changeName(obj){ //이름부터 변경하는 느낌 주도록
    return{...obg, name: 'bob'};// 반환할때는 새로운 오브젝트를 만드는것이 중요!
}