const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    if(req.method === "POST" && req.url == "/mari"){
        res.writeHead(200, {"Content-Type" :"text/plain" });
        res.end("Hola mari \n");
    } else{
        res.statusCode = 404;
        res.end();
    }
});

    server.listen(8005);
    console.log("Servidor en la url http://localhost:8005");
