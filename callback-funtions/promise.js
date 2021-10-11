//Basitçe Promise Aciklamasi
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user ");
    reject(new Error("User not logged in"));
    // resolve({ user: "serif" });
  }, 2000);
});

//.then meaning = we have the information
promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
