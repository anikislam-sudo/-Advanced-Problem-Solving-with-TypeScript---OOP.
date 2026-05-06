// Problem Solve No 1:

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//Problem Solve No 2:

function reverseString(letter: string): string {
  return letter.split("").reverse().join("");
}

reverseString("typescript");

//Problem Solve No 3:

type StringOrNumber = string | number;

function checkType(value: StringOrNumber) {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
}

checkType("Hello");
checkType(42);

//Problem Solve No 4:

const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

//Problem Solve No 5:

interface Book {
  Title: string;
  Author: string;
  PublishedYear: number;
}

const myBook = {
  Title: "TypeScript Guide",
  Author: "Jane Doe",
  PublishedYear: 2024,
};

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

toggleReadStatus(myBook);

//Problem Solve No 6:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

//Problem Solve No 7:

function getIntersection(number1: number[], number2: number[]): number[] {
  return number1.filter((num) => number2.includes(num));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
