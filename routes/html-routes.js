// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/game");
      return
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/game");
      return
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  app.get("/createCharacters", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/charCreate.html"));
});

app.get("/game", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/game.html"));
});
app.get("/", function (req, res) {
  if (req.user) {
    res.redirect("/game");
    return
  }
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
app.get("/simon", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/simon.html"));
});
app.get("/rps", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/rock-paper-scissors.html"));
});
app.get("/riddles", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/riddles.html"));
});
app.get("/boss", isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, "../public/boss.html"));
});
app.get("/hangman",isAuthenticated, function (req , res){
  res.sendFile(path.join(__dirname, "../public/hangman-minigame.html"))

  })
};


