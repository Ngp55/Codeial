const mongoose = require('mongoose');
console.log('mongoose file is created');
// mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/codeial_development');


//,{ useNewUrlParser: true }
const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log('connected to db:: Mongodb');
});

module.exports = db;