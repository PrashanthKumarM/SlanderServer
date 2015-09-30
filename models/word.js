var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WordSchema = new Schema({  
    phrase: String,
    good: Array,
    bad: Array,
});

module.exports = mongoose.model('Dictionary', WordSchema); 