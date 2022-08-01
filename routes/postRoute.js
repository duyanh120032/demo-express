const router = require('express').Router();
const postCtrl = require('../controllers/postCtrl');

router.get('/', postCtrl.getPosts )

module.exports = router;
