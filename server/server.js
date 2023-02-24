const express = require('express'); 
const routes = require('./routes/users');
const app = express();
const db = require('./config/database');
const cors = require('cors');
var bodyParser = require('body-parser');

db();
app.use(cors());
var bodyParserJSON = bodyParser.json();
app.use(bodyParserJSON);
app.use(routes);

app.listen(3000, function() {  
    console.log('listening on 3000')
})