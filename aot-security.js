// standard dec
require('module-alias/register');
const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let filelogger = require('./routes/loggers/fileLogger');
// app.use(express.static('assets'));

// services dec
let aotSecurity = require('@aotSecurity/aotSecurity');
let login = require('@aotSecurity/login');

// common
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets'));
//------------------------------------------------------

app.use('/aotSecurity', aotSecurity);
app.use('/login', login);
//-------------------------------------------------------


// Authorization
// loggers
//app.use(fileLogger);
// performance

require('./routes/lib/prod')(app);
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening on Port ${port}`));
