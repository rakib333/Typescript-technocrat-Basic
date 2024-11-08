{
  //
  // nullable type

  const nullableTest = (value: string | null) => {
    if (value) {
      console.log("sonething is here");
    } else {
      console.log("nothing is here");
    }
  };
  //   nullableTest(null);

  // unknown types
  const getMeterPSec = (value: unknown) => {
    if (typeof value === "number") {
      const meter = (value * 1000) / 3600;
      console.log(`The result is ${meter} ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const meter = (parseFloat(value) * 1000) / 3600;
      console.log(`The result is ${meter} ms^-1`);
    } else {
      console.log("Noting found");
    }
  };

  //   getMeterPSec(null);

  // never type

  const throwErr = (msg: string): never => {
    throw new Error(msg);
  };

  throwErr("error found");

  //
}
