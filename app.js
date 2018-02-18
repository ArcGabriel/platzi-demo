

//	declaración de CONSTANTES
	const
	express	= require('express'),
	app 	= express();

//	habilitar los archivos estáticos de un archivo especcífico
	app.use(express.static(__dirname + '/public'));

//	endPoint para el Home
	app.get('/', (request, response) => {
		return response.sendFile(__dirname + '/public/index.html');
	});

//	endPoint para cualquier otra ruta
	app.get('/*', (request, response) => {
		return response.redirect('/');
	});

//	exportar la aplicación
	module.exports = app;
