import jwt from 'jsonwebtoken';
import Config from '../config';
import Usuario from '../database/models/Usuario';

export const validaToken = async (req,res,next) => {

  try {

        const token = req.headers["x-access-token"];
       
        if (!token) return res.status(403).json({mensaje:"no se envio el token"});
      
       const result = jwt.verify(token,Config.jwtconfig.secret);
      
       const userExist = Usuario.findByPk(result.id);

       if (!userExist) return res.status(403).json({mensaje:"no existe el usuario"});
     
        next();

  } catch(e) {
      return res.status(401).json({mensaje:"no autorizado"});
  }


}