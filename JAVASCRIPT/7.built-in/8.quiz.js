// 퀴즈
// 1. 문자열의 모든 캐릭터를 하나씩 출력하라
const text = 'Hello World!';
// console.log(text.charAt());

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
} // i 가 0부터 시작해서 text의 길이까지 빙글빙글 돌면서 i 를 하나씩 증가해서

//2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', ')); //내가 쓴답
const array = ids.split(', ');
console.log(array);
// 3. 1초에 한번씩 시계를 날짜포함 출력하기

// setInterval(console.log(new Date()), 1);
setInterval(() => {
  const now = new Date();

  console.log(now.toLocaleString('ko-KR'));
}, 1000); // 1초 = 1000밀리세컨드

// [ 'user1', 'user2', 'user3', 'user4' ]
// [ 'user1', ' user2', ' user3', ' user4' ]
