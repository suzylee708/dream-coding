//카운터 만들기
// 0 이상의 값으로 초기화한뒤 하나씩 숫자를 증가할수 있는 카운터를 만들기
// counter class 만들기
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment = () => {
    return this.#value++;
  };
}

const counter = new Counter(3);
counter.increment(); //1
counter.increment(); //2
console.log(counter.value);
