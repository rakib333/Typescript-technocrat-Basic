{
  //Conditional types   --> ekta type jodi onno type er upor nirvor kore

  type A1 = string;
  type B1 = undefined;

  type X = A1 extends null ? true : false;

  type Y = A1 extends null
    ? true
    : B1 extends undefined
    ? "I am nested"
    : "I am nested but false"; // nested type

  interface Sheikh {
    bike: string;
    car: string;
    plane: string;
    ship: string;
  }

  type CheckVehicle<T> = T extends keyof Sheikh
    ? "He has it "
    : "He is fokinni";
  type Checking = CheckVehicle<"emni">;

  //
}
