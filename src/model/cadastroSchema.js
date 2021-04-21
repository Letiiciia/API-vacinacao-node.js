const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cadastroVacina = new Schema ({

    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        require: true
    },
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
        require: true
    },
    dataNascimento: {
        type: String,
        require: true
    },
    


})