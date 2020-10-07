const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utility/Path');

router.get('/dashboard',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','dashboard.html'))
})

module.exports = router;