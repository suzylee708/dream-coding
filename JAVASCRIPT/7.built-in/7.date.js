// 날짜 관련 함수들 Date

// Static 은 클라스 이름 만으로도 만들수 있는것
// Instance 에 있는 메소드는 객체를 만들어서 접근할 수 있는 함수

console.log(new Date()); // 현재시간 출력
console.log(new Date('Jun 5, 2022')); // 특정한 날짜의 시간을 지정하고 싶다면
console.log(new Date('2022-12-17T03:24:00')); // 2022년 12월 17일 3시 24분 00초

// Date에 있는 Static 함수
console.log(Date.now()); // Date 의 기준은 UTC 기준 (협정 세계시, 1970년 1월 1일 자정과의 시간차이를 밀리초 단위로 표기)
// 특정한 시간을 parsing해서 밀리초 단위로 표기가 가능
console.log(Date.parse('2022-12-17T03:24:00')); //1671265440000

//instance level의 함수
const now = new Date(); // Date 현재의 시간을 new date로 만들어서
now.setFullYear(2023); // now의 객체를 이용해서 년도를 설정
now.setMonth(10); // 11월 - 여기서 주의해야할것은! 0 = 1월
//get을 이용해서 세밀한 것들을 받아올 수 있음
console.log(now.getFullYear()); //2023
console.log(now.getDate()); // 마찬가지로 0부터 index 시작
console.log(now.getDay()); // 0: 일요일 ... 6: 토요일
console.log(now);

//원하는 항목별로 string으로 변환
console.log(now.toString());
console.log(now.toDateString()); // 날짜만 string으로 출력
console.log(now.toTimeString()); // 시간만 출력
console.log(now.toISOString()); // 날짜를 표현하는 방식을 ISO 8601 형식
console.log(now.toLocaleString('en-US')); // 날짜를 미국형식으로 표현
console.log(now.toLocaleString('ko-KR')); // 날짜를 한국형식으로 표현
