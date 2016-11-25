// Inicialização ======================================================================
var express = require('express');
var app = express();								// adiciona o express
var mongoose = require('mongoose'); 				// adiciona o mongodb
var port = process.env.PORT || 9091; 				// define a porta do app
var database = require('./config/database'); 		// carrega as configurações do bando de dados
var morgan = require('morgan');						// adiciona o midware de log
var bodyParser = require('body-parser');			// adiciona o parser
var methodOverride = require('method-override');	// adiciona o override

// Configuração =======================================================================
mongoose.connect(database.localUrl);							// conecta com o banco de dados

app.use(express.static('./public')); 							// define o diretório estático
app.use(morgan('dev')); 										// define o diretório de logs
app.use(bodyParser.urlencoded({'extended': 'true'})); 			// define o parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// define o parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 	// define o parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); 				// devine o override X-HTTP-Method-Override para o request


// Rotas ==============================================================================
require('./app/routes.js')(app); 			// chama o arquivos das rotas
require('./app/functions/initialData.js')	// chama o scrip que faz a carga inicial no banco de dados

// Inicia o APP =======================================================================
app.listen(port);
console.log("Aplicação iniciada na porta: " + port);
