{
  // ternary || optional chainaing || nulish coaleascing operator

  const age: number = 15;

  //   if (age >= 18) {
  //     console.log("adult");
  //   } else {
  //     console.log("not adult");
  //   }

  //ternary
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  // nullish coaleasing operator
  type User = {
    id: number;
    roll?: number; // optional
    age: number;
    bloodGroup: "O+"; // object literal
    gender: "male" | "female";
    email?: string;
    persentAddress: string;
    parmanentAddress?: "";
  };

  const person: User = {
    id: 10,
    age: 25,
    bloodGroup: "O+",
    gender: "male",
    persentAddress: "dhaka",
  };

  const parmanentAddress = person?.parmanentAddress ?? "Dhaka";
  //   console.log({ parmanentAddress });

  // nullish coaleasing operator works for only null and undefined
  const isAuthenticated = "";
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  //
}
