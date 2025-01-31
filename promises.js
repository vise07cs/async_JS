// In JavaScript, operations like API requests, reading files, or querying a database take time. Instead of blocking the execution, JavaScript uses asynchronous programming. Earlier, this was done using callbacks, but callbacks led to "callback hell" (deeply nested functions that are hard to read and maintain). Promises solve this problem.

// Creating a Promise
// A Promise is created using the new Promise constructor, which takes a function with two arguments:

// resolve → Call this function when the operation is successful.
// reject → Call this function when an error occurs.

const fetchData=new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("data fetched")
  }, 2000);
})
fetchData.then((data)=>{
  console.log(data);
  return "data processing started"
})
.then((message)=>{
  console.log(message)
  return "Data processed successfully"
})
.then((finalMessage)=>{
  console.log(finalMessage)
})
.catch((error)=>{
  console.log("Error", error)
})