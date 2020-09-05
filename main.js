"use strict";
// https://www.youtube.com/watch?v=WBPrJSw7yQA
// 26:18
exports.__esModule = true;
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
var person1 = ['Chris', 22]; // cannot have [22, 'Chris']
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
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
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
