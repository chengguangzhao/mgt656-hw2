var express = require('express');
var app = express();

app.get('/nickname', function(request, response){
    response.send('lively dolphin');
});

app.listen(process.env.PORT || 4000);