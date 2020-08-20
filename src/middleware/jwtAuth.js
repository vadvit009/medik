const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_ADMIN, (err, decoded) => {
    if (err) {
      console.log("ERROR WITH TOKEN === ", err);
      console.log("DECODED === ", decoded);
      return res.sendStatus(403)
    };
    req.body.id = decoded.id;
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
    if (err) {
      console.log(err);
      return res.sendStatus(403);
    }
    req.body.id = decoded.id;
    next();
  });
};

module.exports = {
  verifyAdminToken,
  verifyUserToken,
};
