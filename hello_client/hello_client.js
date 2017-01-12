var unirest = require('unirest');

unirest.get().end(function (response) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', response.headers);
    console.log('Body:', response.body);
});
