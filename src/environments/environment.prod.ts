
export const environment = {
	production: true,
	development: true,
	id:0,
	btn:0,
	match:[],
	orderId:0,


	apiServer: {
		useHttps: true,
		serverUrl: 'localhost',
		fullAddress: function () {
			let protocol = environment.apiServer.useHttps ? 'https' : 'http';
			let address = environment.apiServer.serverUrl;
			//let port = environment.apiServer.port && environment.apiServer.port > 0 ? `:${environment.apiServer.port}` : '';

			return `${protocol}://${address}/`;
		}
	},
};
