// object data type

const user: {
    firstName: string;
    middleName?:  string;    // optional --> dile string dite hobe na dile nai
    lastName: string;
    isMarried: boolean;
    readonly isStudent: 'Yes';        // literal --> ja value dite bolbo tai dite hobe
} = {
    firstName: "Md",
    middleName: '',
    lastName: 'Rakib',
    isMarried: false,
    isStudent: 'Yes'
};