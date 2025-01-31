function fetchUserData(userId) {
  return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Fetching data for userId: ${userId}`);
        resolve(userId);

          
      }, 1000);
  })
  .then((id) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              console.log(`Processing data for userId: ${id}`);
              resolve(id);
          }, 2000);
      });
  })
  .then((id) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              console.log(`Data ready for userId: ${id}`);
              resolve(id);
          }, 2000);
      });
  });

}

// Example usage
// fetchUserData(5).then(console.log);
fetchUserData(5)
