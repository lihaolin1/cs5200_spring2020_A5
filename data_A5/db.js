const mongoose = require('mongoose');
module.exports = function () {
    const LOCAL_DB = 'mongodb://localhost:27017/data_test1';
    const REMOTE_DB = 'URL_TO_YOUR_REMOTE_MONGODB_SERVER';
    const MONGO_DB = LOCAL_DB;
    mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(u=> console.log("Connected!" + u));
};
