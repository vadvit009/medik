const passport = require('passport');
const strategyFB = require('passport-facebook').Strategy;
const { User } = require('../models');

passport.use(
  new strategyFB({
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: 'https://medtechnika.te.ua/api/v1/fb/cb',
    profileFields: ['name', 'email']
  },
    function (accessToken, refreshToken, profile, done) {
      console.log("PROFIle === ", profile);
      const { first_name, last_name, id } = profile._json;
      console.log("ACCESS TOKEN FB === ", accessToken);
      const userData = {
        facebookID: id,
        fName: first_name,
        lName: last_name,
        role: false
      };
      User.findOne({ facebookID: id })
        .then(user => {
          console.log("USER === ", user);
          if (!user) {
            User.create(userData)
              .then(fbUser => res.status(200).send(fbUser))
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
  ))
