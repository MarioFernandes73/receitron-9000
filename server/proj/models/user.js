var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//set up a mongoose schema
var UserSchema = new Schema({
    name: String,
    password: String,
    email: String,
    role: { type: String, enum: ['patient', 'doctor', 'pharmacist', 'admin'] }
});

module.exports = mongoose.model('User', UserSchema);