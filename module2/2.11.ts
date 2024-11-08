{
  //utility types

  // Pick types --> pick kkore anbe type gule jake jake chai
  type Person = {
    name: string;
    age: number;
    contactNo: string;
    email?: string; // optional   --> dile string dibe
    address: string;
  };

  // Pick type  --> name , age  dekhabe
  type NameAge = Pick<Person, "name" | "age">;

  // Omit type --> Pick er oposite   --> name , age bad diye dekhabe baki gula
  type ContactInfo = Omit<Person, "name" | "age">;

  // required type --> sob required kore dibe

  type PersonRequired = Required<Person>;

  // Partial type --> sob optional kore dibe
  type PersonPartial = Partial<Person>;

  // Readonly type --> value change kora jabe na

  type PersonReadonly = Readonly<Person>;

  const person2: PersonReadonly = {
    name: "rakib",
    age: 30,
    address: "adfasf",
    contactNo: "234",
  };

  //   person2.name = "Rafiq";    // cannot assign to readonly property

  //Record type

  type myObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {};

  const person10: myObj = {
    a: "aa",
    b: "dd",
    c: "rr",
  };

  //
}
