const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vacinaSchema = new Schema ({

    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        require: true
    },
    nomeVacina: {
        type: String,
        require: true
    },
    paciente: {
        type: Object,
        require: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const vacinaCollection = mongoose.model('vacina', vacinaSchema);

module.exports = {vacinaCollection}