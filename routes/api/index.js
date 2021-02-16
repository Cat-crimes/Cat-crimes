const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
// router.use('/cats', require('./cats.routes'));

module.exports = router;
