"use strict";
// https://www.youtube.com/watch?v=WBPrJSw7yQA
// 26:18
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Variables and typing:
// --------------------------- 
var message = "Welcome back";
// console.log(message + "\n");
var x = 10; // can be done without initializations
var y = 20; // need initializations and can not be changed
var title = "CodevolutionTutorial";
var isBeginner = true;
var total = 0;
var name = "Jacob";
var sentence = "My name is " + name + ".\nI am a beginner in Typescript.";
// console.log(sentence);
// console.log();
var sentence2;
sentence2 = "My name is " + name + "\nI am a n00b in Typescript";
// console.log(sentence2)
isBeginner = null;
sentence2 = undefined;
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
var list3;
list3 = [7, 8, 9];
list3.push(10);
// console.log(list3);
var person1 = ["Chris", 22]; // cannot have [22, 'Chris']
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Hoya";
var randomValue2 = 20; // this implicitly declares randomValue2 as a number
// randomValue2 = false;  // this throws an error
var randomValue3; // this implicitly declares randomValue2 as a number
randomValue3 = 30;
randomValue3 = false;
randomValue3 = "CanIgetA";
var myVariable = 10;
// console.log(myVariable.name);  // undefined
// myVariable();                  // generates an error upon running
var myVariable2 = 20;
// console.log(myVariable2.name);    // Property 'name' does not exist on type 'unknown'.
// myVariable2();                    // This expression is not callable.
// console.log((myVariable2 as number).toExponential());
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var multiType;
multiType = 20;
multiType = true;
// Functions:
// -------------
// optional paramters (ones with ?) are default undefined if not given a value
// default paramters are like optional paramters, but with default values
function add(num1, num2, num3) {
    if (num2 === void 0) { num2 = 10; }
    var result = num1 + num2;
    if (num3) { // check if num3 has a value
        result += num3;
    }
    return result;
}
// The curly braces inside the paramters indicate person is an object with attributes firstName and lastName
function fullName(person) {
    if (!person.lastName) {
        person.lastName = "";
    }
    else {
        person.lastName += "y";
    }
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruce",
    middleName: "Robert",
    lastName: "Wayne"
};
// fullName(p);
// Classes and access modifiers
// ---------------------------------------
var Employee = /** @class */ (function () {
    // public employeeName: string; // same as line above
    // private employeeName: string;
    // protected employeeName: string; // allows access to this class and derived classes, but nowhere else
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good moringing " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Jacob");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
