var mongoose = require('mongoose');

module.exports = mongoose.model('Resort', {
	tipo: {
        type: String,
        default: ''
    },
    nome: {
        type: String,
        default: ''
    },
	imagem: {
        type: String,
        default: ''
    },
	regiao: {
        type: String,
        default: ''
    },
	estado: {
        type: String,
        default: ''
    },
	cidade: {
        type: String,
        default: ''
    },
	presente: {
        type: String,
        default: ''
    },
	bebida: {
        type: String,
        default: ''
    },
	wifi: {
        type: String,
        default: ''
    },
	cancelamentoGratis: {
        type: String,
        default: ''
    },
	parcelas: {
        type: String,
        default: ''
    }
});