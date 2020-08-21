const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy({
    clientID: process.env.G_CLIENT_ID,
    clientSecret: process.env.G_CLIENT_SECRET,
    callbackURL: 'https://medtechnika.te.ua/api/v1/google/cb',
    profileFields: ['name', 'email']
  },
    function (accessToken, refreshToken, profile, done) {
      console.log("PROFILE === ", profile);
      const { first_name, last_name, id, email } = profile._json;
      User.findOne({ googleID: id })
        .then(user => {
          if (!user) {
            User.create({
              email: email,
              googleID: id,
              fName: first_name,
              lName: last_name,
              role: false
            })
              .then(fbUser => done(null, fbUser))
              .catch(err => {
                console.log(err);
              })
          }
          done(null, user);
        })
        .catch(err => {
          console.log(err);
        })
    }
  )
)
