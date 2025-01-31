// Modify fetchUserData(userId) to handle errors properly:

// If userId is not a number, the promise should be rejected immediately with an error message:
// "Invalid userId: userId must be a number"
// Otherwise, continue with the existing promise chain (Fetching, Processing, Data Ready).
// If any step fails, catch the error and log: "Error: <error message>".

function fetchUserData(userId){
  // function isNumber(value) {
  //   return typeof value === 'number' && !Number.isNaN(value);
  // }
  if(typeof userId!='number'){
    return Promise.reject("The input is not a number")
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetching data for userId: ${userId}`);
      resolve(userId);

        
    }, 1000);
})

  .then((id)=>{
   

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Processing data for userid: ${id}`)
        resolve(id)
      }, 1000);
      
    })
  })
  .then((id2)=>{
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Data ready for userid: ${id2}`)
        resolve(id2)

        
      }, 1000);
    })
  })
   
}
fetchUserData("abc").catch(console.log)