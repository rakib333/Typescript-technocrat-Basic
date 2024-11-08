{
  // interface vs type
  // type --> primitive / non-primitive a bebohar hobe

  type User1 = {
    name: string;
    age: number;
    address?: string;
  };
  type UserName = string;
  type Age2 = number;

  type UserWithRole = User1 & { role: string };

  interface UserWithRole1 extends User2 {
    role: string;
  }

  const user: User1 = {
    name: "Rakib",
    age: 21,
  };
  const user1: UserWithRole = {
    name: "Rakib",
    age: 21,
    role: "intern",
  };

  // interface --> primitive a bebohar hobe na

  interface User2 {
    name2: string;
    age: number;
    address?: string;
  }

  const person: User2 = {
    name2: "Rafiq",
    age: 34,
  };
  const person1: UserWithRole1 = {
    name2: "Rafiq",
    age: 34,
    role: "intermediate",
  };

  // js--> object, array--> object, func --> object

  type Roll1 = number[];
  const rollNum: Roll1 = [1, 2, 3, 4];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNum2: Roll2 = [1, 2, 3, 5, 8];

  //
}
