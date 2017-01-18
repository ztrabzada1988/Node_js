var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost/', function (err, db) {
    if (err) {
        console.error(err);
        db.close();
        return;
    }

    var collection = db.collection('snippets');

    var create = function (name, content) {
        var snippet = {
            name: name,
            content: content;
        };

        collection.insert(snippet, function (err, result) {
            if (err) {
                console.error("Could not create snippet", name);
                db.close();
                return;
            }
            console.log("Created snippet", name);
            db.close();
        });
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
        } else if (process.argv[2] == 'read') {
            read(process.argv[3]);
        } else if (process.argv[2] == 'update') {
            update(process.argv[3], process.argv[4]);
        } else if (process.argv[2] == 'delete') {
            del(process.argv[3]);
        } else {
            console.error('Command not recognized');
            db.close();
        }

    }
};

main();

});
