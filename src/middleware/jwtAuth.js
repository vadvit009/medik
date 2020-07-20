const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_ADMIN, (err, userId) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.body.userId = userId;
    next();
  });
};

const verifyUserToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.body.userId = decoded.id;
    next();
  });
};

module.exports = {
  verifyAdminToken,
  verifyUserToken,
};
