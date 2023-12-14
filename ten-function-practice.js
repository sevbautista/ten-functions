

// 1.
function isTrue(num) {
    return num === true;
}


// 2.
function isFalse(num) {
    return num === false;
}

// 3.
function not(uI) {
    return !uI;
}

// 4.
// function addOne(uI) {
//     return uI+1;
// } // ADD ONE MEANS TO INCREMENT
function addOne(uI) {
    return ++uI;
}

// 5.
// function isEven (uI) {
//     if(uI % 2 === 0);
//     return true;
// } // IF AND TRUE ARE NOT NECESSARY HERE
function isEven(uI) {
    return (uI % 2 === 0);
}

// 6.
function isIdentical(arg1, arg2) {
    return arg1 === arg2;

}

// 7.
function isEqual(arg1, arg2) {
    return arg1 == arg2;
}

// 8.
function or(arg1, arg2) {
    return arg1 || arg2;
}

// 9.
function and(arg1, arg2) {
    return arg1 && arg2;
}

// 10.
function concat(arg1, arg2) {
    return `${arg1}` + `${arg2}`
}

