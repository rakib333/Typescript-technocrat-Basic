{
  // mapped types

  const arrOfNums: number[] = [1, 2, 3, 4, 5];

  // convert this array into string by map

  const arrOfStr: string[] = arrOfNums.map((number) => number.toString());
  console.log(arrOfStr); // output--> [ '1', '2', '3', '4', '5' ]

  type AreaNumber = {
    height: number;
    width: number;
  };

  // we want to convert AreaNumber into string

  type AreaString = {
    [index in keyof AreaNumber]: string;
  };

  // using generic
  type AreaGeneric<T> = {
    [index in keyof T]: T[index];
  };

  const area1: AreaGeneric<{ height: number; width: string }> = {
    height: 100,
    width: "50",
  };

  //
}
