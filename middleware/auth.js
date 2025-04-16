const jwt = require("jsonwebtoken");

const auth = (request, response, next) => {
  const token = request.header("Authorization");
  if (!token)
    return response.status(401).json({ message: "no token provided" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    request.user = { id: decoded.id };
    next();
  } catch (err) {
    response.status(402).json({ message: "Token is invalid" });
  }
};

module.exports = auth;
