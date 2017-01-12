var hello_server = require('hello_server');

var app = hello_server.app;

app.listen(process.env.PORT || 8080, process.env.IP);
console.log("server running on 8080");
