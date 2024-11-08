{
  //Typescript basic problem solving

  /**
* Task 1: Basic Data Types and First Program
**Objective**: Write a TypeScript program that outputs a welcome message.
**Instructions**:
- Create a TypeScript program.
- Print the following message to the console:
  > Hello World, I will complete this course successfully and become a Next level Web Developer!
*/

  const printStr: string =
    "Hello World, I will complete this course successfully and become a Next level Web Developer!";

  // console.log(printStr); // Solved

  /*
Task 2: Functions, Optional, and Literal Types

**Objective**: Create a function with parameters and an optional literal type.

**Instructions**:

- Define a function that takes:
  - `name` (string)
  - `age` (number)
  - `role` (optional, with type `'admin' | 'user' | 'guest'`)
- The function should log these values or perform a basic action.

*/

  const printUserInfo = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ) => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
  // printUserInfo("Alice", 30); // solved

  /*
Task 3: Object Types, Type Alias, & Literal Types

**Objective**: Define a structured `Person` object using Type Aliases.

**Instructions**:

- Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.
*/

  type Person = {
    name: string;
    address: string;
    hairAndEyeColor: string;
    income: number;
    expenses: number;
    hobbies: {
      gamming: boolean;
      criket: boolean;
      travelling: boolean;
    };
    familyMembers: {
      father: "Dead";
      mother: boolean;
      sister: boolean;
      brother: boolean;
    };
    job: "Yes";
    skills: {
      html: boolean;
      css: boolean;
      frontend: boolean;
      backend: false;
    };
    maritalStatus: "Married";
    friends: string[];
  };

  const personInfo: Person = {
    name: "Rakib",
    address: "Dhaka",
    hairAndEyeColor: "Black",
    income: 10000,
    expenses: 70000,
    hobbies: {
      gamming: true,
      criket: false,
      travelling: false,
    },
    familyMembers: {
      father: "Dead",
      mother: true,
      sister: true,
      brother: false,
    },
    job: "Yes",
    skills: {
      html: true,
      css: true,
      frontend: true,
      backend: false,
    },
    maritalStatus: "Married",
    friends: ["refat", "jodu", "modu", "kodu"],
  };
  //   console.log(personInfo);     // solved

  /*
 ----------------------------------------------------------- 
Task 4: Union and Intersection Types

**Objective**: Create union and intersection types using interfaces.

**Instructions**:

- Define interfaces `Book` and `Magazine`.
- Create:
  - A type that is a **union** of `Book` and `Magazine`.
  - A type that is an **intersection** of `Book` and `Magazine`.
  --------------------------------------------------------------
*/

  interface Book {
    name: string;
    author: string;
  }
  interface Magazine {
    name: string;
    author: string;
    publishYear: number;
  }

  type UnionType = Book | Magazine;
  type IntersectionType = Book & Magazine; // solved

  /*
### Task 5: Function Type

**Objective**: Write a function that reverses a string.

**Instructions**:

- Write a function `reverseString` that:
  - Takes a single string argument.
  - Returns the string in reverse order.
  - **Example**:
    - Input: `"hello"`
    - Output: `"olleh"`

*/

  const reverseStr = (str: string) => {
    let splitStr = str.split("");
    // console.log(splitStr); [ 'h', 'e', 'l', 'l', 'o' ]
    let reverseArray = splitStr.reverse();
    // console.log(reverseArray);    ["o", "l", "l", "e", "h"];

    const joinArray = reverseArray.join("");
    // return joinArray;
    // console.log(joinArray);
  };

  reverseStr("hello"); //output--> olleh

  /*
### Task 6: Spread and Rest Operators, Destructuring

**Objective**: Write a function that uses the rest operator for variable-length arguments.

**Instructions**:

- Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
*/

  const restFuncSum = (...nums: number[]): number => {
    let total = 0;
    for (let num of nums) {
      total = total + num;
    }
    return total;
  };

  const result: number = restFuncSum(10, 20, 30, 40);
  console.log(result); // solved

  //
}
