// JAVSCRIPT CODE NOTES :-
// ------------------------


// Lets start with 5 examples of callback functions:-


// Ex-01

function greet(name) {
console.log("Hello " + name);
}

setTimeout(() => {
greet("atish");
}, 2000);

// in the above example greet function is passed as a callback to setTimeout function



////////////////////////////////////////////////////////////////////////////////////////////

// Ex-02

let nums=[1,2,3,4,5]
let output=function square(n){
return n*n
}

let result=nums.map(output)
console.log(result)

// The map method takes a callback function (output) as an argument, which is executed for each element in the array.

// or we could have also written the map function like this

let cube=nums.map((n)=>n*n*n)
console.log(cube);

//////////////////////////////////////////////////////////////////////////////////////////////


// Ex-03

// callback function for event handling


document.getElementById("green").addEventListener('click',clickGreen)
function clickGreen(){
console.log("Green clicked")
document.getElementById('body').style.backgroundColor="green"


}







// Ex-04


function greet(name, callback) {
console.log(`Hello, ${name}!`);
callback(); // Execute the callback function
}

function sayGoodbye() {
console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

