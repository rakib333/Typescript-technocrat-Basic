{
  // promise / asynchronous ts

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  // get data from api
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    return data;
    // console.log(data);
  };

  getTodo();

  // declare type

  type Something = { something: string };

  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "rakib" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log(data["something"]);
  };

  showData();

  //
}
