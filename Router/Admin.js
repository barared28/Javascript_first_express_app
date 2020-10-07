const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utility/Path');

router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-user.html'));
})
router.post('/add-user', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/dashboard');
})


module.exports = router;