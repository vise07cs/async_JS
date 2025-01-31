// 2️⃣ Chain Promises
// Create a function fetchUserData(userId), which:

// Returns a promise that resolves with "Fetching data for userId: X" after 1 second.
// Then, the next .then() should return "Processing data for userId: X" after another 1 second.
// Finally, the last .then() should return "Data ready for userId: X" after another 1 second.

function fetchUserData(userId){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`fetching data for userid: ${userId}`)
      resolve(userId)
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
fetchUserData(5)