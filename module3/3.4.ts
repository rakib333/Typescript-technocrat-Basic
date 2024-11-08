{
  // instanceof --> type guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  // Dog class by inharitance
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      return "I am barking";
    }
  }

  // cat class by inharitance
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      return "I am meawing";
    }
  }

  // smart way of coding
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      console.log(`My name is ${animal.name} and ${animal.makeBark()}`);
    } else if (isCat(animal)) {
      console.log(`My name is ${animal.name} and ${animal.makeMeaw()}`);
    } else {
      console.log(animal.makeSound());
    }
  };

  const dog = new Dog("Mr. Dog", "Dog");
  const cat = new Cat("Mr. Cat", "Cat");

  getAnimal(dog);
  getAnimal(cat);

  //
}
