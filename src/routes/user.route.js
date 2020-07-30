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
} = require("../controllers/user.controller");

const { verifyUserToken, verifyAdminToken } = require("../middleware/jwtAuth");

app.get("/users", verifyAdminToken, getAllUsers);

app.get("/user", verifyUserToken, getUser);

app.post("/login", login);

app.post("/logout", logout);

app.post("/register", register);

app.post("/restore/password", restorePassword);

app.post("/change/password", changePassword);

app.patch("/user", verifyUserToken, updateUser);

app.delete("/user/:id", verifyAdminToken, deleteUser);

app.patch("/user/restore/:id", verifyAdminToken, restoreUser);

app.patch("/user/soft-delete/:id", verifyAdminToken, softDeleteUser);

module.exports = app;
