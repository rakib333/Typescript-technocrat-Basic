{
  // Constraints in typescripts
  const addStudentCourse = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web developement";
    return {
      ...student,
      course,
    };
  };

  const student1 = addStudentCourse({
    name: "Rakib",
    id: 123,
    email: "rakib@gmail.com",
    hasWatch: true,
  });
  const student2 = addStudentCourse({
    name: "Rafiq",
    id: 1254,
    email: "rafiq@gmail.com",
    hasWatch: false,
    devtype: "Level 1 web",
  });
  const student3 = addStudentCourse({
    id: 2324,
    name: "mr. x",
    email: "x@gmail.com",
    emni: "emni",
  });

  //
}
