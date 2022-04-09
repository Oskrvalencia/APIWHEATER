const jwt = require("jsonwebtoken");

/**
 * Validate if the token is still active
 * @param {string} req req.headers["authorization"]
 * @param {*} res
 * @param {*} next
 */
const authToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (header) {
    jwt.verify(header, "SecretKey", (err, authData) => {
      if (err) {
        res.status(403).send({ message: err.message });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({ message: "Token is required" });
  }
};

/**
 * Array function to get token
 * @param {Array} user
 * @returns
 */
const getToken = async (user) => {
  const tokenRes = jwt.sign({ user }, "SecretKey", {
    expiresIn: '60m',
  });
  return { token: tokenRes };
};


const decodeJwt = async (token) => {
  const tokenRes = jwt.decode(token, jwt.DecodeOptions & { complete: true })
  return { token: tokenRes };
};

module.exports = {
  authToken,
  decodeJwt,
  getToken,
};
