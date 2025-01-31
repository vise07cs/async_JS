const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 1000);
});

fetchData
  .then((data) => {
      console.log(data);
      return "Processing data...";
  })
  .then((message) => {
      console.log(message);
  })
  .catch((error) => {
      console.log("Error:", error);
  });
