const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acceso denegado");
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = payload;
    next();
  } catch (error) {
    try {
      const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      req.payload = payload;
      next();
    } catch (error) {
      res.status(400).send("Token caducado o no válido",error);
    }
  }
};



// HACER COMPROBACIÓN DE QUE SEA ADMIN Y PASE

const verifyAdmin = async (req, res, next) => {
  try {
    const payload = req.payload;

    if (payload.role === "user")
      return res.status(401).send("No tienes permisos");
    next();
  } catch (error) {
    res.status(400).send("Token caducado o no válido");
  }
};


module.exports = { verifyToken, verifyAdmin}