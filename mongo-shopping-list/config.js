exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV === 'production' ? 'mongodb://zubair.trabzada@gmail.com:start786@ds127949.mlab.com:27949/shopping-list-mongodb' : 'mongodb://localhost/shopping-list-mongodb');

exports.PORT = process.env.PORT || 8080;
