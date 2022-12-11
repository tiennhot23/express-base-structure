const router = require('express').Router();

const { validateBaseRequest } = require('./validation');
const { baseController } = require('./controller');

router.get('/', validateBaseRequest, baseController);

module.exports = router;
