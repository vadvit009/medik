const app = require("express").Router();
const {
    getAllUsers,
    getUser,
    login,
    register,
    updateUser,
    deleteUser,
    restoreUser,
    softDeleteUser,
    logout,
    changePassword,
    restorePassword,
    cbGoogle,
    cbFb
} = require("../controllers/user.controller");

const passport = require('passport');

const { verifyUserToken, verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/users", verifyAdminToken, getAllUsers);

app.get("/user", verifyUserToken, getUser);

app.post("/login", login);

app.get("/login/fb", passport.authenticate('facebook', { scope: ['email'] }));

app.get("/fb/cb", passport.authenticate('facebook', { failureRedirect: '/login', session: false }), cbFb);

app.get("/login/google", passport.authenticate('google', { scope: ['email'] }));

app.get("/google/cb", passport.authenticate('google', { failureRedirect: '/login', session: false }), cbGoogle);

app.get("/logout", logout);

app.post("/register", register);

app.post("/restore/password", restorePassword);

app.post("/change/password", changePassword);

app.patch("/user", verifyUserToken, updateUser);

app.delete("/user/:id", verifyAdminToken, deleteUser);

app.patch("/user/restore/:id", verifyAdminToken, restoreUser);

app.patch("/user/soft-delete/:id", verifyAdminToken, softDeleteUser);

module.exports = app;