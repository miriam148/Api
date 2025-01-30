const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso denegado");
  try {
<<<<<<< HEAD
    const payload = jwt.verify(token, process.env.JWT_SECRET);
=======
    const payload = jwt.verify(token, process.env.SECRET_TOKEN);
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69
    req.payload = payload;
    next();
  } catch (error) {
    try {
<<<<<<< HEAD
      const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      req.payload = payload;
      next();
    } catch (error) {
      res.status(400).send("Token caducado o no válido",error);
=======
      const payload = jwt.verify(token, process.env.SECRET_TOKEN_REFRESH);
      req.payload = payload;
      next();
    } catch (error) {
      res.status(400).send("Token caducado o no válido");
>>>>>>> 48a224486cf5510c15ed432640a3aaac2e25ff69
    }
  }
};

module.exports = { verifyToken}