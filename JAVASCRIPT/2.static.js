//static 정적 프로퍼티, method

class Fruit {
  static Max_Fruit = 5;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  static makeRandomFruit() {
    return new Fruit('banana', '🍌');
  }

  display() {
    console.log(`${this.name}: ${this.emoji}`);
  }
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
const apple = new Fruit('apple', '🍎');
console.log(apple);
