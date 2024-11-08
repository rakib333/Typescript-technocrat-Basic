{
  //Generic with interface

  interface Developer<T, X = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
      releaseYear: number;
      generation: string;
    };
    smartwatch: T;
    bike?: X;
  }

  type XiomiWatch = {
    brand: string;
    model: string;
    price: number;
  };

  const poorDeveloper: Developer<XiomiWatch> = {
    name: "Rakib",
    laptop: {
      brand: "HP",
      model: "Notepad 234tu",
      releaseYear: 2013,
      generation: "5th",
    },
    smartwatch: {
      brand: "Xiomi",
      model: "2x33",
      price: 3000,
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    price: number;
    heartCheck: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engine: string;
  }
  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Rayhan",
    laptop: {
      brand: "Apple",
      model: "Macbook 202",
      releaseYear: 2019,
      generation: "9th",
    },
    smartwatch: {
      brand: "Apple watch",
      model: "20x33",
      price: 30000,
      heartCheck: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engine: "250cc",
    },
  };

  //
}
