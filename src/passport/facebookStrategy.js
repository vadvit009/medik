const passport = require('passport');
const strategyFB = require('passport-facebook').Strategy;
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
  new strategyFB({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: 'https://medtechnika.te.ua/api/v1/fb/cb',
    profileFields: ['name', 'email']
  },
    function (accessToken, refreshToken, profile, done) {
      console.log("PROFILE === ", profile);
      const { first_name, last_name, id, emails } = profile._json;
      console.log("ACCESS TOKEN FB === ", accessToken);
      User.findOne({ facebookID: id })
        .then(user => {
          console.log("USER === ", user);
          if (!user) {
            User.create({
              email: emails[0].value,
              facebookID: id,
              fName: first_name,
              lName: last_name,
              role: false
            })
              .then(fbUser => res.send(fbUser))
              .catch(err => {
                console.log(err);
                res.sendStatus(409)
              })
          }
          else {
            res.sendStatus(200)
          }
        })
        .catch(err => {
          console.log(err);
          res.sendStatus(409)
        })
      done(null, profile);
    }
  )
)
