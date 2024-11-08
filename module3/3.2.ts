{
  // inheritence in OOP

  class Person {
    name: string;
    age: number;
    address: string;

    // initialize constriuctor
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    takeSleep(numberOfSleep: number) {
      console.log(
        `${this.name} sleep ${numberOfSleep} hours in a Day. His age is ${this.age}`
      );
    }
  }

  class Student extends Person {
    // initialize constriuctor
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student = new Student("Mr. Rakib", 28, "India");
  //   const hisName = student.name;
  //   console.log(hisName);
  student.takeSleep(6);

  // teacher class
  class Teacher extends Person {
    designation: string;

    // initialize constriuctor
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClasses(numberOfClasses: number) {
      console.log(
        `${this.name} takes ${numberOfClasses} class in a Day. His age is ${this.age}`
      );
    }
  }

  const teacher = new Teacher("Mr Teacher", 40, "Bangladesh", "Professor");
  teacher.takeSleep(7);

  //
}
