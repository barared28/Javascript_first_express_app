const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = require('./Router/Admin');
const shopRouter = require('./Router/Shop');
const rootDir = require('./utility/Path');

const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRouter);

app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404-not-found.html'));
})

app.listen(5000, () => console.log('Terhubung'));