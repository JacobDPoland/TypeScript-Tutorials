// https://www.youtube.com/watch?v=WBPrJSw7yQA
// 26:18

// Console commands:
// ================
// * compile .ts file to .js: tsc filename.ts (.ts optional)
// * run .js file: node filename.js (.js optional)
// * auto-compilation: tsc filename --watch

// New things/notes:
// ======================
// * `` is reserved for multi-line strings
// * null and undefined types: sub-types of all other types (allow values of null and undefined)
// * arrays here remind me of vectors in C++
// * tuples here are like lists in Python, except have fixed size and need types declared
// * enums are just like enums in C++
// * any type: allows for dynamic typing
// * unknown type: any value can be assigned, but unlike type any, . operator and function calls can not be used on the variable
// * type assertion: like type casting
// * === checks if types and values are the same
// * == will perform type conversions if necessary and check values


export {}; // makes typescript treat this as a module instead of a script

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

let person1: [string, number] = ['Chris', 22];  // cannot have [22, 'Chris']


enum Color { Red = 5, Green, Blue };
let c: Color = Color.Green;
// console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = "Hoya";

let randomValue2 = 20;  // this implicitly declares randomValue2 as a number
// randomValue2 = false;  // this throws an error

let randomValue3;       // this implicitly declares randomValue2 as a number
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

function hasName(obj: any): obj is { name: string }{
	return !!obj &&
		typeof obj === "object" &&
		"name" in obj
}


