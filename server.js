const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const SteamStrategy = require("passport-steam").Strategy;
const session = require("express-session"); // Add this line

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({ secret: "your-secret-key", resave: true, saveUninitialized: true })
); // Add this line
app.use(passport.initialize());
app.use(passport.session());

// Steam authentication strategy
passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:8080/auth/steam/return",
      realm: "http://localhost:8080/",
      apiKey: "747CDCC51CB89C8D19E0672872F3E1E1", // Replace with your Steam API key
    },
    (identifier, profile, done) => {
      // You can customize the handling of the user profile data here
      return done(null, profile);
    }
  )
);

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Steam authentication route
app.get(
  "/auth/steam",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get(
  "/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the previous page or default to "/"
    const redirectUrl = req.session.returnTo || "/";
    delete req.session.returnTo;

    // Access user data from req.user
    const userData = req.user;
    console.log("User Data:", userData);

    // Send user data to the client
    res.json({ success: true, userData });

    // Do NOT add the redirect response here
    // const frontendPort = process.env.REACT_APP_FRONTEND_PORT || 3000;
    // const finalRedirectUrl = `http://localhost:${frontendPort}${redirectUrl}`;
    // res.redirect(finalRedirectUrl);
  }
);

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/", function (req, res) {
  // Save the returnTo URL in the session
  req.session.returnTo = req.originalUrl;
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080");
});
