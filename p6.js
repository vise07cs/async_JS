// 2️⃣ Chain Promises
// Create a function fetchUserData(userId), which:

// Returns a promise that resolves with "Fetching data for userId: X" after 1 second.
// Then, the next .then() should return "Processing data for userId: X" after another 1 second.
// Finally, the last .then() should return "Data ready for userId: X" after another 1 second.

function fetchUserData(userId) {
  // Your code here
  const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log(`Fetching data for ${userId}:`)
      resolve(userId)
      
    }, 1000);
    

  })
  return promise;

  // promise.then((id)=>{
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(`Processing data for ${id}:`)
  //       resolve(id)
        
  //     }, 2000);
      
  //   })
  // })
  // promise.then((id)=>{
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(`Data ready for userId: ${id}`)
  //       resolve(`Data ready for userId: ${id}`);
       
  //     }, 2000);
      
  //   })
  // })




}

// Example usage
// fetchUserData(5).then(console.log);
fetchUserData(5)
