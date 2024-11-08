{
  // union  types

  // type FrontendDeveloper = "fakibuzDeveloper" | "juniorDeveloper";
  // type FullstackDeveloper = "FrontendDeveloper" | "expertDeveloper";

  // const newEmployee: FrontendDeveloper = "juniorDeveloper";
  // const anotherNewEmployee: FullstackDeveloper = "expertDeveloper";

  type User = {
    id: number;
    roll?: number; // optional
    age: number;
    bloodGroup: "O+"; // object literal
    gender: "male" | "female";
    email?: string;
  };

  const person: User = {
    id: 12,
    age: 23,
    bloodGroup: "O+",
    gender: "male",
  };

  // Intersection

  type FrontendDeveloper = {
    skills: string[];
    designation1: string;
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: string;
  };

  type Developer = FrontendDeveloper & BackendDeveloper;

  const newEmployee: Developer = {
    skills: ["HTML", "CSS", "JS", "Express"],
    designation1: "Frontend developer",
    designation2: "Backend developer",
  };
}
