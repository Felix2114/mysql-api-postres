const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/postres', controllers.createPostre);
router.get('/postres', controllers.getAllPostre);
router.delete('/postres/:id', controllers.deletePostre);
router.put('/postres/:id', controllers.updatePostre);

module.exports = router;
                         
