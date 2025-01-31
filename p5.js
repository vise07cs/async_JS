// Write a function delayedMessage(msg, delay) that returns a promise that resolves with the message after the given delay.
function delayedMessage(msg, delay) {
  // Your code here
  const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(msg)
      
    }, delay);
    
  })
  return promise

}
delayedMessage("Hello, world!", 2000).then(console.log);
// Example usage
// delayedMessage("Hello, world!", 2000).then(console.log);

// Expected output ------>  Hello, world!

