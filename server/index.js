var express = require('express');
var app = express();

app.use(require('./routes'));

    app.listen(9000);
    console.log("++");
