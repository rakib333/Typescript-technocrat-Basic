// learning function

// normal function in ts
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(10, 30);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object --> function --> method
const poorMan = {
  name: "Rakib",
  age: 30,
  balance: 0,
  newBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

// callback function

const arr: number[] = [2, 5, 8];
const newArr: number[] = arr.map((elem: number): number => elem * elem);
