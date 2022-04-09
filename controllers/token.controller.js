const jwt = require("../libs/jwt.libs");

/**
 * Array function by get token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
 const getTokenLogin = async (req, res, next) => {
    const { userName, password } = req.body;
    try {
        const user = userName === 'user1' && password === 'password1' ? true : false
      if (!user) {
        res.status(400).send({ description: "invalid username or passwords" });
        return;
      }
      const token = await jwt.getToken(userName);
      res.status(200).send(token);
    } catch (e) {
      res.status(500).send(e);
    }
  };

  module.exports = {
    getTokenLogin,
  };
  