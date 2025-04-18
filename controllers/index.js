const models = require("../database/models");

const createPostre = async (req, res) => {
    try {
        const postre = await models.User.create(req.body);
        return res.status(201).json({
            postre
        });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
};

const getAllPostre= async (req, res) => {
    console.log('getting postres');
    try {
        const postre = await models.User.findAll({
            include: [
            ]
        });
        return res.status(200).json({ postre });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const  deletePostre  = async (req,  res)  =>  {
   console.log('deleting user...');

   try {
      const postre = await models.User.findOne({ where: { id: req.params.id } });
      if (postre) {
          console.log(postre);
          await postre.destroy();
      }
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      }
      return res.status(200).json( { "deleted ": req.params.id });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};


const updatePostre  = async (req,  res)  =>  {
   console.log('updating user...');

   try {
      const postre = await models.User.findOne({ where: { id: req.params.id } });
      if (postre) {
          console.log(postre);
          postre.nombre = req.body.nombre;
          postre.descripcion = req.body.descripcion;
          postre.categoria = req.body.categoria;
          postre.precio = req.body.precio;
          postre.stock = req.body.stock;
          await postre.save();
      }
      else {
         return res.status(200).json( { "error ": req.params.id  +  " no existe"});
      }

      return res.status(200).json( { "updated ": postre });
   }
   catch  (error) {
      return res.status(500).send ( { error: error.message  } );
   }

};



module.exports = {
    createPostre,
    getAllPostre,
    deletePostre,
    updatePostre
};

