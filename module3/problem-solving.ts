{
  /*
  Problem-1
  ------------
  Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
*/

  const sumArray = (arr: number[]): number => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  };

  const result = sumArray([1, 2, 3, 4, 5]);
  console.log(`Problem-1 ans: ${result}`);

  /*
  problem -2 
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
*/

  const removeDuplicates = (arr: number[]): number[] => {
    const uniqueArray: number[] = arr.filter(
      (num, index) => arr.indexOf(num) === index
    );
    return uniqueArray;
  };

  const result2 = removeDuplicates([1, 2, 2, 3, 4, 2, 4, 3, 5]);
  console.log(result2);

  /*
  problem-3
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input. 
*/

  const countWordOccurrences = (sentence: string, word: string): number => {
    // make an array of given sentence
    const wordsArray: string[] = sentence.split(" ");

    // console.log(wordsArray);

    let countWord: number = 0;
    for (const findWord of wordsArray) {
      if (findWord.toLowerCase() === word.toLowerCase()) {
        countWord++;
      }
    }

    return countWord;
  };

  const result3 = countWordOccurrences(
    "I TYpescript love typescript Typescript",
    "typescript"
  );
  console.log(result3);

  /*
  Problem-4
  Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
  */

  //we use object input here so we can use interface for type declaring
  interface Circle {
    shape: "circle";
    radius: number;
  }
  interface Rectangle {
    shape: "rectangle";
    height: number;
    width: number;
  }

  const calculateShapeArea = (shape: Circle | Rectangle): string | number => {
    if (shape.shape === "circle") {
      const area: number = parseFloat(
        (Math.PI * shape.radius * shape.radius).toFixed(2)
      );
      return area;
    } else if (shape.shape === "rectangle") {
      const area: number = shape.height * shape.width;
      return area;
    } else {
      return "wrong input";
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);

  /*
  problem-5
  -----------
  Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  */

  interface Property {
    name: string;
    age: number;
  }

  const getProperty = <X, Y extends keyof X>(obj: X, property: Y) => {
    return obj[property];
  };

  const person: Property = { name: "rakib", age: 50 };
  console.log(getProperty(person, "age"));

  /*
  Problem-6

  Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
  
  */

  // Declaring interface type
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // Partial type --> partial make every property optional like (name?: string)
  type ProfilePartial = Partial<Profile>;

  const updateProfile = (
    mainProfile: Profile,
    updated: ProfilePartial
  ): Profile => {
    return {
      ...mainProfile,
      ...updated,
    };
  };

  // input
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  // console.log(updateProfile(myProfile, { age: 60 }));
  // console.log(updateProfile(myProfile, { name: "Rakib" }));
  console.log(
    updateProfile(myProfile, {
      email: "rakib@email.com",
      age: 60,
      name: "Rakib",
    })
  );
  // output --> { name: 'Rakib', age: 60, email: 'rakib@email.com' }

  /*
Problem-7
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
*/

  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    // declaring car age method assuming this year
    getCarAge() {
      const thisYear: number = new Date().getFullYear();
      // console.log(thisYear);
      return thisYear - this.year;
    }
  }

  // creating the instance of object
  const carAge = new Car("Honda", "Civic", 2010);
  const myCarAge = carAge.getCarAge();
  console.log(myCarAge); // output --> 14

  /*
Problem-8
---------
Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
*/

  interface Key {
    name: string;
    age: number;
    email: string;
  }

  const validateKeys = <T extends object, Q extends keyof T>(
    obj: T,
    keys: Q[]
  ): boolean => {
    for (let key of keys) {
      // console.log(key);
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };

  const person1: Key = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person1, ["name", "age"]));

  //
}
