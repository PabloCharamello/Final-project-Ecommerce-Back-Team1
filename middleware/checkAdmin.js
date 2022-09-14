module.exports = function (req, res, next) {
  if (!req.auth.isAdmin) {
    return res.status(401).json({ message: "User is not an Admin" });
  }
  next();
};
