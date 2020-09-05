// https://www.youtube.com/watch?v=WBPrJSw7yQA
// 26:18


export {}; // makes typescript treat this as a module instead of a script

	
// Variables and typing:
// --------------------------- 
let message = "Welcome back";
// console.log(message + "\n");

let x = 10; // can be done without initializations
const y = 20; // need initializations and can not be changed
const title = "CodevolutionTutorial";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Jacob";

let sentence: string = `My name is ${name}.
I am a beginner in Typescript.`;
// console.log(sentence);
// console.log();

let sentence2: string;
sentence2 = `My name is ${name}
I am a n00b in Typescript`;
// console.log(sentence2)

isBeginner = null;
sentence2 = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let list3: number[];
list3 = [7, 8, 9];
list3.push(10);
// console.log(list3);

let person1: [string, number] = ["Chris", 22]; // cannot have [22, 'Chris']

enum Color {
    Red = 5,
    Green,
    Blue,
}
let c: Color = Color.Green;
// console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Hoya";

let randomValue2 = 20; // this implicitly declares randomValue2 as a number
// randomValue2 = false;  // this throws an error

let randomValue3; // this implicitly declares randomValue2 as a number
randomValue3 = 30;
randomValue3 = false;
randomValue3 = "CanIgetA";

let myVariable: any = 10;
// console.log(myVariable.name);  // undefined
// myVariable();                  // generates an error upon running

let myVariable2: unknown = 20;
// console.log(myVariable2.name);    // Property 'name' does not exist on type 'unknown'.
// myVariable2();                    // This expression is not callable.
// console.log((myVariable2 as number).toExponential());

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

let multiType: number | boolean;
multiType = 20;
multiType = true;


// Functions:
// -------------
// optional paramters (ones with ?) are default undefined if not given a value
// default paramters are like optional paramters, but with default values
function add(num1: number, num2: number = 10, num3?: number) {
	let result: number = num1 + num2;
	if (num3){	// check if num3 has a value
		result += num3;
	}
    return result;
}
// console.log(add(5, Number("10"), 4));
// console.log(add(5, Number("10")));
// console.log(add(5));


// Intefaces:
// ----------------------

interface Person{
	firstName: string,
	lastName?: string
}


// The curly braces inside the paramters indicate person is an object with attributes firstName and lastName
function fullName(person: Person) {
	if (!person.lastName) {
		person.lastName = "";
	}
	else {
		person.lastName += "y";
	}
	console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
	firstName: "Bruce",
	middleName: "Robert",  // the object can have more than the required attributes
	lastName: "Wayne"
};
// fullName(p);


// Classes and access modifiers
// ---------------------------------------
class Employee{
	
	employeeName: string;
	// public employeeName: string; // same as line above
	// private employeeName: string;
	// protected employeeName: string; // allows access to this class and derived classes, but nowhere else

	constructor(name: string) {
		this.employeeName = name;
	}

	greet() {
		console.log(`Good moringing ${this.employeeName}`);
	}
}

let emp1 = new Employee("Jacob");
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
	constructor(managerName: string) {
		super(managerName);	// calls the Employee constructor (base/super class)

	}
	delegateWork() {
		console.log("Manager delegating tasks");
	}
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);


