//접근자 프로퍼티 (set or get) = Accessor Property

class Student {
  constructor(firstName, LastName) {
    this.firstName = firstName;
    this.LastName = LastName;
  }
  get fullName() {
    return `${this.LastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student('suji', 'lee');
console.log(student.fullName);
student.fullName = 'kim jeehoon';
