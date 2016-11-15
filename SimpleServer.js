var http = require('http')

var server = http.createServer(function(request, response){
	
	var url = request.url
	var method = request.method

	if (url === '/' && method === 'GET') {
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>" + method +"</h1>");
	} else if (url === '/profiles' && method === 'GET') {
		var data = {
			name: 'mike',
			favoriteFood: 'chipotle'
		}
		response.setHeader("Content-Type", "application/json");
		response.end(JSON.stringify(data));
	} else {
		response.statusCode  = 404
		response.setHeader("Content-Type", "text/html");
		response.end("<h1>check your input plz</h1>");
	}

	

})

server.listen(3000);

console.log('iiiits working')

