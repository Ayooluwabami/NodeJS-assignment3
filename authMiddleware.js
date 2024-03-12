const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;
  req.user = { username, password };
  next();
};

module.exports = authMiddleware;
