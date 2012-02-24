var http = require("http"),
	url = require("url"),
	path = require("path"),
	fs = require("fs"),
	mime = require("mime");

function start(router) {
    
    function onRequest(request, response) {
            
        var path = url.parse(request.url).pathname;
        
        router.route(path);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello");
        response.end();
    }
    
	var port = process.env.C9_PORT;
	port = port === undefined ? "80" : port;

	var server = http.createServer(onRequest);
	server.listen(port);

	console.log("Server running at http://localhost:" + port + "/");
}
    
exports.start = start;