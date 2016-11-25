var path = require('path');
var appDir = path.dirname(require.main.filename);
var Resort = require(appDir + '/app/models/resort');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync(appDir + '/app/data/pacote.json', 'utf8'));


//Função para fazer a carga inicial no MongoDB
Resort.find(function (err, resorts) {
	if(resorts.length ==0)
	{
		for(var i = 0; i < obj.length; i++) {
			 Resort.create({
					tipo: obj[i].tipo,
					nome: obj[i].nome,
					imagem: obj[i].imagem,
					regiao: obj[i].regiao,
					estado: obj[i].estado,
					cidade: obj[i].cidade,
					presente: obj[i].presente,
					bebida: obj[i].bebida,
					wifi: obj[i].wifi,
					cancelamentoGratis: obj[i].cancelamentoGratis,
					parcelas: obj[i].parcelas,
					done: false
				});
		  }
	}
});