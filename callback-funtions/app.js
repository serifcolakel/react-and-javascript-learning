console.log("START");

function loginUser(email, password, callBack) {
  setTimeout(() => {
    console.log("now we have the data");
    callBack({ userEmail: email });
  }, 5000);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1000);
}
function videoDetail(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}
const user = loginUser("serifc@gmail.com", 1235125, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetail(videos[0], (title) => {
      console.log(title);
    });
  });
});

console.log("END");
