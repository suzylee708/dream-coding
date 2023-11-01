//접근 제어자 - 캡슐화
// private (#), public (default), protected (상속된 자식 class에서만 접근이 가능)

class Fruit {
  #name;
  #emoji;
  #type = 'fruit';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
