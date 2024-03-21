const express = require('express');
const { mainUserPage, getLocationData } = require('../controllers/mainUsers');
const router = express.Router();


router.get('/', mainUserPage)

router.get('/locations', getLocationData)



module.exports = router