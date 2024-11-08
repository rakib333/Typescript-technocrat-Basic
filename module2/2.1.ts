{
  // type assertion

  let anything: any;

  anything = "Rakib";
  anything = 111;

  //   (anything as string).normalize;
  // (anything as number).toFixed(2);     // as bebohar kore type assertion kora lagbe

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const converted = parseFloat(value) * 1000;
      return `The string value is: ${converted}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm("1000") as string;
  const result2 = kgToGm(1000) as number;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
