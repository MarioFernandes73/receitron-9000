

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReceitaSchema = new Schema({
    nome: String,
    imageUrl: String,
    preparacao: String[],
    dificuldade: String,
    dose: String,
    ingredientes: [
        {
            unidade: String,
            quantidade: String,
            desc: String,
        }
    ],
    descricao: String,
    restricoes: String[],
    tempoPreparacao: String
});

module.exports = mongoose.model('Receita', ReceitaSchema);