const express = require("express");
const app = express();
require('dotenv').config()
const port =  process.env.PORT;
const routesPath = require('./src/routes')

app.set('view engine', 'ejs');
app.use(express.json())
app.set('views', `${__dirname}/src/views`);
app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/js', express.static(`${__dirname}/public/js`));
app.use('/img', express.static(`${__dirname}/public/img`));
app.use('/vid', express.static(`${__dirname}/public/vid`));

app.use(routesPath);

app.listen(port,()=>{
    console.log(`server started on ${port}`)
})