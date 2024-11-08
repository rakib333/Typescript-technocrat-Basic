// spread operator and rest operator

// spread operator for array
const arr1: string[] = ["kalu", "bulu", "fulu"];
const arr2: string[] = ["rakib", "rafiq", "razu", "rayhan"];

arr1.push(...arr2);

// spread operator for object

const teachers = {
  name: "kalam",
  age: 25,
  subject: "typescript",
};

const teachers2 = {
  name: "salam",
  age: 35,
  subject: "nodejs",
};
const teachers3 = {
  name: "balam",
  age: 30,
  subject: "DBMS",
};

const allTeachers = {
  ...teachers,
  ...teachers2,
  ...teachers3,
};

// rest operator

const greetings = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(friend));
};

greetings("habul", "mabul", "kabul", "tabul");
