
const { Router } = require('express');

const { usersGet, usersPut, usersPatch, usersDelete, usersPost } = require('../controllers/usersController');

const router = Router();


router.get('/', usersGet);

router.put('/:id', usersPut )

router.post('/', usersPost)

router.delete('/', usersDelete)

router.patch('/', usersPatch )





module.exports = router;