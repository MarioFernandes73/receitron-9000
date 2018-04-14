var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receitaSchema = require("./receita.js");

//set up a mongoose schema
var UserSchema = new Schema({
    name: {type: String, unique:true},
    receitasFavoritas: [{type: Schema.Types.ObjectId, ref: 'Receita' }],
    carrinho: [String]
});

module.exports = mongoose.model('User', UserSchema);