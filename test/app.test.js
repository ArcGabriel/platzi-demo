

//	declaración de CONSTANTES de referencia a utilities
	const 
		request = require('supertest'),
		app		= require('../app');

//	declaración del tipo de prueba
	describe('app', function(){
		it('should serve html on index', (done) => {
			request(app)
				.get('/')
				.expect('Content-Type', /html/)
				.expect(200, done);
		});
	});