// Math 는 대부분 static properties, 와 method 함수들을
//많이 가지고 있기 때문에 우리가 직접 math 객체를 만들일은 거의 없다

console.log(Math.E); //오일러의 상수, 자연로그의 밑에서 사용하는 함수
console.log(Math.PI); //파이 원주율 파이값

//static 함수들
// 절대값을 출력
console.log(Math.abs(-10)); //10
// 소수점 이하를 올림
console.log(Math.ceil(1.4)); //Math의 세일 -> 2
// 소수점 이하를 내림
console.log(Math.floor(1.4)); // 1
// 소수점 이하를 반올림
console.log(Math.round(1.4)); //1
console.log(Math.round(1.7)); //2
// 정수만 반환: 밑에 있는 소수점 이하를 다 버리는것
console.log(Math.trunc(1.52343)); // 1 / Math의 트렁크

//최대 최소값을 찾을때
console.log(Math.max(1, 2, 4)); //4 주어진 숫자중에 가장 큰 값을 반환
console.log(Math.min(1, 2, 4)); //4 주어진 숫자중에 가장 작은 값을 반환

//거듭제곱
console.log(3 ** 2); // 3을 두번 곱한것
console.log(Math.pow(3, 2)); // 9

//제곱근
console.log(Math.sqrt(9)); // 3 어떤걸 두번 곱해야 9가 되는지

//랜덤한 값을 반환
console.log(Math.random()); // 0부터 1사이에 랜덤한 값 반환

//1 부터 10까지 랜덤한 값을 반환
console.log(Math.random() * 10 + 1); // 10을 곱하면 1부터 9까지 랜덤이니까 1 더해준다
console.log(Math.floor(Math.random() * 10 + 1)); //floor 함수 사용해서 소수점 내리기
