console.log("START");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("now we have the data");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000);
  });
}
function videoDetails(video, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

/* UGLY
const user = loginUser("serifc@gmail.com", 1235125, (user) => {
  console.log(user);
  //CALLBACK structure
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});
*/

/*Simply UGLY -> BEAuty */
loginUser("serif", "colakel")
  .then((user) => getUserVideos(user.email))
  .then((videos) => videoDetails(videos[0]))
  .then((detail) => console.log(detail));

//Sync Code

console.log("END");
