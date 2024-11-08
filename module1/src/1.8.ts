// destructuring
{
  // object destructuring
  const person = {
    id: 12,
    name: {
      firstName: "Md",
      middleName: "Habibullah",
      lastName: "Rakib",
    },
    age: 28,
    contactNo: 123413414,
  };

  const {
    contactNo,
    name: { lastName },
  } = person;

  // array destructuring

  const friends: string[] = [
    "rakib",
    "rafiq",
    "razu",
    "rayhan",
    "kalu",
    "bulu",
    "fulu",
  ];

  const [, sotoVai, ...restFriends] = friends;
}
