var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost/', function (err, db) {
    if (err) {
        console.error(err);
        db.close();
        return;
    }

    var collection = db.collection('snippets');

    var create = function (name, content) {
        db.close();
    };

    var read = function (name) {
        db.close();
    };

    var update = function (name, content) {
        db.close();
    };

    var del = function (name, content) {
        db.close();
    };

    var main = function () {
        if (process.argv[2] == 'create') {
            create(process.argv[3], process.argv[4]);
        } else if (process)
    }

    console.log('Connected to MongoDB database and its working');
    db.close();
});
