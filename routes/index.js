const userRoute = require('./userRoute');
const router = require('express').Router();

/* GET home page. */
router.use('/users',userRoute );
router.use('/posts', require('./postRoute'));



module.exports = router;
