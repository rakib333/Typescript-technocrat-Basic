{
  // class

  class Aminal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // initialize constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }
    // using method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  // using this class we make an object

  const dog = new Aminal("German shephard", "dog", "Ghew Ghew");
  const cat = new Aminal("Persian cat", "cat", "Meaw meaw");
  cat.makeSound();
  //   dog.makeSound();

  //
}
