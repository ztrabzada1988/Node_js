var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
// var indexHTMLfile = require('./public/index.html')


var Storage = {
    // add function (POST)
    add: function (name) {
        var item = {
            name: name,
            id: this.setId
        };
        this.items.push(item);
        this.setId += 1;
        return item;
    },

    // delete function (DELETE)
    delete: function (id) {

        this.items = this.items.filter(item => item.id != id);
        return this.items;
    },

    // update function (PUT)
    update: function (name, id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items[i].name = name;
                return this.items[i];
            }
        }
    }

};

var createStorage = function () {
    var storage = Object.create(Storage);
    storage.items = [];
    storage.setId = 1;
    return storage;
}

var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

app.get('/items', function (request, response) {
    response.json(storage.items);
});


// add the POST (create) route (endpoint)
app.post('/items', jsonParser, function (request, response) {
    // if the name property from request body is missing:
    if (!('name' in request.body)) {
        return response.sendStatus(400);
    }
    // if it is not missing you just add the item to the shoppin list and return 201 created.
    var item = storage.add(request.body.name);
    response.status(201).json(item);
});

// add the DELETE (delete) endpoint or route

app.delete('/items/:id', jsonParser, function (request, response) {
    var id = request.params.id;

    storage.delete(id);
    response.status(200).json(id);
});

// add the PUT (update) endpoint
app.put('/items/:id', jsonParser, function (request, response) {
    var id = request.params.id;
    var name = request.body.name;

    var item = storage.update(name, id);
    response.status(200).json(item);
})

// run on local host 8080
app.listen(process.env.PORT || 8080, process.env.IP);
console.log("running on local host 8080");

// export for test-server.js
exports.app = app;
exports.storage = storage;
