{
  // generic constraint with keyof operator
  type Vehicles = {
    bike: string;
    car: string;
    ship: string;
  };

  // type Owner  = 'bike' | 'car' | 'ship';   // this is manual

  type Owner = keyof Vehicles;

  const person = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  //   const person1: Owner = "bike"; // crtl + space dile key gula asbe

  const user = {
    name: "Rakib",
    age: 23,
    hasBike: false,
    email: "rakib@gmail.com",
  };
  const user1 = {
    bike: true,
    isStudent: false,
  };

  const giveTheValue = person(user, "email");
  const sendAnotherValue = person(user1, "bike");

  //   user['name']      // Rakib   output dibe
  //   user['age']      // 23   output dibe

  //
}
