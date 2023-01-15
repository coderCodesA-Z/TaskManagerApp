// let, var, const -> variable declaration
// weakly typed language
// var -> global scope, ES5
// let, const -> ES6


// let a = 10;
// console.log(a);
// console.log(typeof a);
// comment

let addBtn = document.querySelector(".buttons .add");
// console.log(addBtn);
let modal = document.querySelector(".modalContainer");


var isModalPresent = false;
addBtn.addEventListener("click", function() {
    // if modal hidden, display modal
    if(!isModalPresent) {
   
    }
    // if modal there, hide the modal
    else {

    }

    isModalPresent = !isModalPresent;
});