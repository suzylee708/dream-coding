// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}, 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}, 🍊`);
//   },
// };

//생성자 함수 construnctors
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = function () {
    console.log(`${this.name}:${this.emoji}`);
  };
  return this;
}

const apple = new Fruit('apple', '🍎');
console.log(apple);
const orange = new Fruit('orange', '🍊');
console.log(orange);
console.log(apple.emoji);
apple.display();
