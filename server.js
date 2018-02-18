

//	declaración de CONSTANTES
	const 
	http = require('http'),
	app	 = require('./app');

//	Crea el SERVIDOR 	
	http.createServer(app).listen(4000);

//	registra LOG de operación
	console.log('Im running');