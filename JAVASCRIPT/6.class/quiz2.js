// 정직원과 파트타임 직원을 나타낼수 있는 클래스를 만들어보자
//정직원 과 파트타임직원은 둘다 직원 = superior
//각각의 직원들은 이름, 부서이름 한달 근무시간 정보가 들어있고
// 매달 직원들의 정보를 이용해서 한달 월급을 계산가능하게 만들것임
//정직원은 시간당 10000원 / 파트타임은 8000원
// 프로퍼티와 메소드를 통해서 직원을 나타낼수 있을지 상속을 어떻게 활용할지 고민

class Employee {
  constructor(name, dpt, workHour, rate) {
    this.name = name;
    this.dpt = dpt;
    this.workHour = workHour;
    this.rate = rate;
  }
  payroll() {
    return this.workHour * this.rate;
  }
}

class Fulltime extends Employee {
  static payRate = 10000;
  constructor(name, dpt, workHour) {
    super(name, dpt, workHour, Fulltime.payRate);
  }
}
class Partime extends Employee {
  static payRate = 8000;
  constructor(name, dpt, workHour) {
    super(name, dpt, workHour, Partime.payRate);
  }
}

const suji = new Partime('suji', 'design', 20);
const jeehoon = new Fulltime('jeehoon', 'architecture', 10);
console.log(suji.payroll()); //20*8000 = 160000
console.log(jeehoon.payroll()); // 10 * 10000 = 100000
