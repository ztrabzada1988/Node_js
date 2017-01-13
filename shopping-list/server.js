var express = require('express');

var Storage = {
    add: function (name) {
        var item = {
            name: name,
            id: this.setId
        };
        this.items.push(item);
        this.setId += 1;
        return item;
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

// run on local host 8080
app.listen(process.env.PORT || 8080, process.env.IP);
console.log("running on local host 8080");
