const http = require('http');

const routes = require('./routes');


const server = http.createServer((request, response) => {
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    const route = 
     routes.find((routeObj) => (routeObj.endpoint === request.url && routeObj.method === request.method));
    
    if(route) {
     route.handler(request, response) 
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }


});

const port = 3000;

server.listen(port, () => console.log(`Listening on port http://localhost:${port}`));