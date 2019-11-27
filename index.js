const express =  require('express');
const apiRoute = require('./routes/api/index')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', apiRoute);
app.listen('8000')
