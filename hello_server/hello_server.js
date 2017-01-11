var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.send("Hello World");
});

app.get('/:firstname/:lastname', function (request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;

    response.send(["Hello", first, last].join(" "));
});

app.get('/jedi/:firstname/:lastname', function (request, response) {
    var first = request.params.firstname;
    var last = request.params.lastname;
    var jediName = last.slice(0, 3) + first.slice(0, 2);

    response.send(["Hello", jediName].join(" "));
});

app.get('/headers', function (request, response) {
    response.json({

        "host": "localhost:8080",
        "user-agent": "curl/7.49.1",
        "accept": "*/*"
    });
});

app.listen(process.env.PORT || 8080, process.env.IP);
console.log("server running on 8080");
