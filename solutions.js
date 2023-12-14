"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
// 1. isTrue
function isTrue(input) {
    return input === true;
}

// 2. isFalse
function isFalse(input) {
    return input === false;

}

// 3. not
function not(input) {
    return !input;
}

// 4. addOne
function addOne(input) {
    return ++input;
}

// 5. isEven
function isEven(input) {
    return (input % 2 === 0);
}

// 6. isIdentical
function isIdentical(num1, num2) {
    return num1 === num2;
}

// 7. isEqual
function isEqual(num1, num2) {
    return num1 == num2;
}

// 8. or
function or(num1, num2){
    return num1 || num2;
}

// 9. and
function and(num1, num2){
    return num1 && num2;
}

// 10. concat
function concat(input1, input2) {
    return String(input1) + String(input2);
}


// function isEqual(arg1, arg2) {
//     return arg1 == arg2;
// }


// //1. isTrue
// function isTrue(input) {
//     return input === true;
// }
//
// //2. isFalse
// function isFalse(input2) {
//     return input2 === false;
// }
//
// //3. not
// function not(input3) {
//     return input3 !== input3;
//     //return !input
// }
//
//
//
// //4. addOne
// function addOne(input4) {
//     return Number(input4) + 1;
//     //return ++input4
// }
//
// //
// //5. isEven
// function isEven(input5) {
//     return (input5) % 2 === 0;
// }
// let evenInput = parseFloat(input)
//     return evenInput % 2 === 0;
//
//     T'Asia's solution:
//     function isEven(input) {
//     if(input %2 ===0);
//     return true;
// }

//     //else if (input === input){
//     // return false;
//     //} else if (input === 0); {
//     // return false;
//     //}
//     //
//     //Lance's solution
//     //const isEven = even => even % 2 === 0
//
//     //Gabriel'sSolution
//     //function isEven(input) {
//     //if (input % 2===0) {
// //     return true;
// // } else {
// //     return false;
// // }
// // }
//
// // 6. isIdentical
//
// function isIdentical(input6a, input6b){
//     return input6a === input6b
// }
//
// //Anthony's Solution
// //     function isIdentical(input1, input2){
// // return Object.is(input1, input2)}
// // }
//
//
// //7. isEqual
//
// function isEqual(input7a, input7b) {
//     return input7a == input7b;
//
// }

// //8. or
//
// function or(input8a, input8b){
//     return input8a || input8b
//
//
// }
//
// //9. and
//
// function and(input9a, input9b) {
//     return input9a && input9b
// }
//
// //10. concat
// //
// // function conCat(input10a, input10b) {
// //  let conCat.join(input10a, input10b);
// // }
//
// // // Faruuk's Solution' +
// //     function concat(arg1, arg2) {
// //         return (arg1.toString() + arg2.toString())
// //     }
//
// // function concat(arg1, arg2) {
// //     if(typeof arg1 ==="string" && typeof ar2 === "string") {
// //         return arg1 + arg2;
// //     } else if (typeof arg1 ==="number" && typeof arg2 === "number") {
// //         return arg1.toString() +arg2.toString() {
// //         } else {
// //             return String(arg1) + String(arg2)
// //         }
// //     }
// // }
//
//
// //james' solution
// // function concat(input1, input2) {
// //     return `${input1}` + `${input2}`
// }
//
