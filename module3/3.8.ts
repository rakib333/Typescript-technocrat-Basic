{
  //polymorphism
  class Person {
    getSleep() {
      console.log("I am sleeping for 8 hours per day");
    }
  }

  class Students extends Person {
    getSleep() {
      console.log("I am sleeping for 7 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("I am sleeping for 6 hours per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const people = new Person();
  const student = new Students();
  const developer = new Developer();

  getSleepingHours(people);
  getSleepingHours(student);
  getSleepingHours(developer);

  //////---------------------------------------------////
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // area = pi * r*r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // area = height * width
  class Rectengle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape = new Shape();
  const circle = new Circle(10);
  const rectengle = new Rectengle(10, 20);

  getShapeArea(shape);
  getShapeArea(circle);
  getShapeArea(rectengle);

  //
}
