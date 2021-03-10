const Contacto  = require('../database/models/Contacto');
const Sequelize = require('sequelize');
const Op        = Sequelize.Op;

export const obtieneContactos = async (req,res) => {

   const lista = await Contacto.findAll({ 
                                           order: [ ['id', 'ASC'] ] } 
                                        );
    res.json(lista);
    
}

export const buscaContactos = async (req,res) => {

   let busca = req.body.nombre;
   
   busca = req.params.nombre == ''? 'a' :req.body.nombre;
   
  const lista = await Contacto.findAll({  
   where: {
      asset_name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('nombre_completo')), 'LIKE', '%' + busca + '%')
  }
                                        }  );
   res.json(lista);
   
}

export const crearContacto = async (req,res) => {

   
   const item = await Contacto.create( 
                {
                  nombre_completo: req.body.nombre_completo,
                  apellidos: req.body.apellidos,
                  telefono: req.body.telefono,
                  correo:req.body.correo,
                  foto: req.body.foto,
                  fecha_captura: new Date()
               });

               res.json(item);

 

 

}

export const obtieneContactoPorId = async (req,res) => {
   
   const item = await Contacto.findByPk(req.params.id);
   res.json(item);

}

export const actualizarContacto = async (req,res) => {

  const item = await Contacto.update(
                                       {
                                             nombre_completo: req.body.nombre_completo,
                                             apellidos: req.body.apellidos,
                                             telefono: req.body.telefono,
                                             correo:req.body.correo,
                                             foto: req.body.foto
                                       },
                                       {
                                             where:{ id:req.params.id}
                                       }
                                    );
  res.json(item);

}

export const eliminarContacto = async (req,res) => {

  const item = await Contacto.destroy({
                                       where: { id:req.params.id}
                                     });
   res.json(item);

}