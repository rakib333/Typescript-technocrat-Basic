{
  // Generics

  // if declare type

  //   type GenericArrayN = Array<number>;
  //   type GenericArrayS = Array<string>;
  //   type GenericArrayB = Array<boolean>;

  // if we want to reuse type and dynamically want to use it

  //   type GenericArray<param> = Array<param>;

  // using T is industry standard

  type GenericArray<T> = Array<T>;

  //   const rollNums: number[] = [1,2,3];   // or
  const rollNums: GenericArray<number> = [1, 2, 3];

  //   const names: string[] = ['ra', 'radf', 'jodu', 'modhu'];
  const names: GenericArray<string> = ["ra", "radf", "jodu", "modhu"];

  const boolArr: GenericArray<boolean> = [true, false, true, false];

  // generics in array of object

  type User = {
    name: string;
    age: number;
    address?: string;
  };
  const persons: GenericArray<User> = [
    {
      name: "Rakib",
      age: 28,
      address: "sfsdfsddfsdf",
    },
    {
      name: "kamal",
      age: 40,
      address: "adfff",
    },
  ];

  // Generic Tuple  (Tuple should have an order )
  type GenericTuple<X, Y> = [X, Y];

  const person: GenericTuple<number, { name: string; age: number }> = [
    1212,
    { name: "Rakib", age: 29 },
  ];

  //
}
