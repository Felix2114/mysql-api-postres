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


module.exports = {
    createPostre,
    getAllPostre
};

