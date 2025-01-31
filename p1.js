// starting with namaste node js s02

// // Lets start with 5 exapmples of callcabck functions:-


// function greet(name) {
//   console.log("Hello " + name);
// }

// setTimeout(() => {
//   greet("atish");
// }, 2000);

// // in the above example greet function is passed as a callback to setTimeout function


// let nums=[1,2,3,4,5]
// let sqr=function square(n){
//   return n*n
// }
 
// let result=nums.map(sqr)
// console.log(result)

// // The map method takes a callback function as an argument, which is executed for each element in the array.

// // or we could have also written the map function like this
// let cube=nums.map((n)=>n*n*n)
// console.log(cube);

// 

function fetchData(cb){
  console.log("fetching data ")
  setTimeout(() => {
    let data={name: "vise",
      age:25
    }
    cb(data)
    
  }, 3000);
}

fetchData((result)=>{
 
  console.log(result)
  
})

