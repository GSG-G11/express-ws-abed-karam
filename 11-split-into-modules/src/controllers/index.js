// use express.Router() class and load it with controllers
const router = require('express').Router();
const fruitRouter = require('./fruit');
const errorRouter = require('./error');

router.use(fruitRouter);
router.use(errorRouter);

module.exports = router;
