
const mongoose = require ('../database');
const bcrypt = require('bcryptjs');

const UnidadeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    enterprise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empresa',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Unidade = mongoose.model('Unidade', UnidadeSchema);

module.exports = Unidade;