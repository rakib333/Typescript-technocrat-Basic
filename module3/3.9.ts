{
  //abstruction --> interface and abstruct class

  // idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    moveEngine(): void;
  }

  // real implementation
  class Car implements Vehicle {
    startEngine(): void {
      console.log("I am starting");
    }
    stopEngine(): void {
      console.log("I am stopping");
    }
    moveEngine(): void {
      console.log("I am moving the car");
    }

    test() {
      console.log("I am just testing");
    }
  }

  const car = new Car();
  car.moveEngine();
  car.startEngine();
  car.stopEngine();
  car.test();

  // using abstruct class
  abstract class Car1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moveEngine(): void;
  }

  class ToyotaCar extends Car1 {
    startEngine(): void {
      console.log("I am starting");
    }
    stopEngine(): void {
      console.log("I am stopping");
    }
    moveEngine(): void {
      console.log("I am moving the car");
    }

    test() {
      console.log("I am just testing");
    }
  }

  //
}
