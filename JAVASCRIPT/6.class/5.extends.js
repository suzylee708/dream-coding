//상속 extends

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('EATING');
  }
  sleep() {
    console.log('SLEEPING');
  }
}
class Tiger extends Animal {}
const tiger = new Tiger('white');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log('PLAYING');
  }
  eat() {
    console.log('DOG IS EATING');
    super.eat();
  }
}
const dog = new Dog('buff', 'suji');
console.log(dog);
dog.sleep();
dog.play();
dog.eat();
