// Example 1

class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
    multiply(a, b) {
      return a * b;
    }
    divide(a, b) {
      if (b == 0) {
        console.log("Нельзя делить на 0");
        return null;
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  
  console.log(calculator.add(10, 5));
  console.log(calculator.subtract(10, 5));
  console.log(calculator.multiply(10, 5));
  console.log(calculator.divide(10, 5));

  
// Example 2

class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    // геттер
    get email() {
      return this.emailAddress();
    }

    get fullname() {
      return this.fullNameEmp();
    }

    //метод
    emailAddress() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }

    fullNameEmp() {
      return `${this.firstname} ${this.lastname}`;
    }

  }
  
  let emp1 = new Employee("John", "Smith");
  console.log(emp1.fullname);
  
  let emp2 = new Employee("Mary", "Sue");
  console.log(emp2.email);
  
  let emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname);
  console.log(emp3.lastname);
  

// Example 3

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  let circy = new Circle(11);
  console.log(circy.getArea());
  console.log(circy.getPerimeter());
  

// Example 4

class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount += 1;
    }
}

u1 = new User("johnsmith10")
console.log(User.userCount)
console.log(u1.username)

u2 = new User("marysue1989")
console.log(User.userCount)
console.log(u2.username)

u3 = new User("milan_rodrick")
console.log(User.userCount)
console.log(u3.username)