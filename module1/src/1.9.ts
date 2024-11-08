{
  // Type alias

  type Student = {
    id: number;
    roll: number;
    age: number;
    name: string;
    whichCls?: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    id: 1,
    roll: 1,
    age: 12,
    name: "rakib",
    whichCls: "six",
    contactNo: "123423412",
    address: "Tangail",
  };
  const student2: Student = {
    id: 2,
    roll: 10,
    age: 14,
    name: "rafiq",
    whichCls: "eight",
    address: "Dhaka",
  };

  type UserName = string;

  const firstName: UserName = "Rakib";
  const lastName: UserName = "Habibullah";

  type IsAdmin = boolean;

  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  //
}
