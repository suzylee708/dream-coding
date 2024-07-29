//문자열 함수들
const textObj = new String('Hello World!'); //잘 사용하지 않음 (오브젝트 형태)
const text = 'Hello World!'; // 문자열 원시타입
console.log(text);
console.log(textObj);

text.charAt(); //캐릭터 엣: 위치에 있는 문자열 하나를 반환
console.log(text[6]); //W 6번째 문자열 반환
console.log(text.charAt(5)); //W 위에와 같음

//중요한 프로퍼티
console.log(text.length); //문자열의 길이를 확인할수 있는 속성
//어떤 문자열이 몇번째 인덱스에 있는지 확인
console.log(text.indexOf('l')); //2번째 - 처음부터 시작해서 찾자마자 위치 반환
console.log(text.lastIndexOf('l')); //9번째  -- 뒤에서부터 찾자마자 위치 반환

//해당하는 문자열에 특정한 문자열이 포함하는지 아닌지 확인 (대소문자 구분)
console.log(text.includes('tx')); //false
console.log(text.includes('lo')); //ftrue

//문자열이 특정한 문자로 시작하는지 아닌지 확인
console.log(text.startsWith('He')); //true
// 어떤 문자열로 끝나는지 확인
console.log(text.endsWith('!!')); //false

//텍스트를 전부다 대문자로 변경
console.log(text.toUpperCase());
//소문자
console.log(text.toLowerCase());
//문자열중에서 특정한 문자열을 삭제
console.log(text.substring(0, 2)); // 0(시작하는 위치) 부터 시작해서 2번째 인덱스까지 (2번째는 포함하지 않고 2 이전까지) 부분적인 string을 가져와서 반환
//문자열 삭제
console.log(text.slice(2)); //2번 위치부터 다 잘라냄
console.log(text.slice(-1)); // 마이너스를 하면 뒤에서부터 두번째까지 남기고 잘라냄

//trim : 문자열에 공백이 많아서 공백을 제거하고 싶다면
const space = '                     space              ';
console.log(space.trim()); //문자열만 남김
//split: space 별로 문자열을 끊어주고 싶다면?
const longText = 'Get to the point';
console.log(longText.split(' ')); //space를 지정해주면 space별로 끊어서 배열로 반환 [ 'Get', 'to', 'the', 'point' ]
// 끊어서 처음부터 두개만 받고 싶다면? 숫자도 지정 가능
console.log(longText.split(' ', 2));
