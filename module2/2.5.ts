{
  //
  // function with generics

  // general function create with parameter

  const createArray = (param: string): string[] => {
    return [param];
  };
  const result = createArray("Bangladesh");

  // dynamic function with generic
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resStrDynamic = createArrayWithGeneric<string>("Bangladesh");

  //   type User = {
  //     id: number;
  //     name: string;
  //     age: number;
  //   };
  interface User {
    id: number;
    name: string;
    age: number;
  }
  const resObjestDynamic = createArrayWithGeneric<User>({
    id: 12,
    name: "rakib",
    age: 30,
  });

  // generic function with Tuple => [str, num] --> [' r', 12]

  // dynamic function with generic tuple
  const createArrayWithGenericTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const tupleResult = createArrayWithGenericTuple<string, number>(
    "Rakib",
    1212
  );
  const tupleResultObj = createArrayWithGenericTuple<string, { id: number }>(
    "Rakib",
    { id: 23 }
  );

  const addStudentCourse = <T>(student: T) => {
    const course = "Next level web developement";
    return {
      ...student,
      course,
    };
  };

  const student1 = addStudentCourse({
    name: "Rakib",
    roll: 123,
    hasWatch: true,
  });
  const student2 = addStudentCourse({
    name: "Rafiq",
    roll: 1254,
    hasWatch: false,
    devtype: "Level 1 web",
  });

  //
}
