import Usuario from '../database/models/Usuario';
import jwt from 'jsonwebtoken';
import Config from '../config';

export const registro = async (req,res) => {

  const item = await Usuario.create({
                                    nombre:req.body.nombre,
                                    username:req.body.username,
                                    password:req.body.password,
                                   });

  const token = jwt.sign(
                 {id:item.id},
                 Config.jwtconfig.secret,
                 {expiresIn:86400}
                );
   
    res.json({token});
 }

 export const login = async (req,res) => {
    
   const item = await Usuario.findOne(
           {
              where: {
                  username:req.body.username,
                  password:req.body.password
              }
          });

   if (!item) return res.status(403).json({mensaje:"Usuario no encontrado"});
   
   const token = jwt.sign({id:item.id},Config.jwtconfig.secret,{expiresIn:86400});

   res.status(200).json({token});

 }