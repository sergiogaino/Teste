var Resort = require('./models/resort');

function getResorts(res) {
    Resort.find(function (err, resorts) {
        if (err) {
            res.send(err);
        }
        res.json(resorts);
    });
};

function getRegioes(res){
	Resort.find().distinct('regiao', function(err, regioes) {
		if (err) {
            res.send(err);
        }
		console.log('hello %s', regioes);
        res.json(regioes);
});
}

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // pega todos os resorts
    app.get('/api/resorts', function (req, res) {
        getResorts(res);
    });

    // cria um novo resort
    app.post('/api/resorts', function (req, res) {
		
		//Não implementado
        Resort.create({
            nome: req.body.nome,
			regiao: req.body.regiao,
			estado: 'Nordeste',
            done: false
        }, function (err, resort) {
            if (err)
                res.send(err);

            getResorts(res);
        });

    });

    // apaga um resort
    app.delete('/api/resorts/:resort_id', function (req, res) {
        Resort.remove({
            _id: req.params.resort_id
        }, function (err, resort) {
            if (err)
                res.send(err);

            getResorts(res);
        });
    });

    // aplicação -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // carrega a view singlepage
    });
};
