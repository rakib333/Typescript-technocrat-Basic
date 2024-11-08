{
  // type guard, typeof, in
  // typeof --> type guard

  type Alphanumeric = number | string;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(10, 20);
  console.log(result);

  // in guard --> use in object

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and i am an ${user.role}`);
    } else {
      console.log(`My name is ${user.name} and i am a normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal user",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin user",
    role: "Admin",
  };

  getUser(normalUser);
  getUser(adminUser);

  //
}
