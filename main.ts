export{}
let message = 'Hello this is my world!';
console.log(message);

let x = 10;
const y = 20;

let sum; 
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'MG';

let sentence: string = `My name is ${name} I am a beginner in TypeScript`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myNmae: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Joe', 21];

enum Color { red = 5, green, blue };

let c: Color = Color.green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'JD';

let myVariable: unknown = 10;

/** 
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}
(myVariable as string).toUpperCase();
*/

let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20; 
multiType = true;

function add(num1: number, num2: number = 10): number {

  if (num2)
    return num1 + num2;
  else
    return num1;
  
} 

add(5, 10);
add(5);

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne'
};

fullName(p);


class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Mohamed");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
    
  }

  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

