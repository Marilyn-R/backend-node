const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    if(req.method === "POST" && req.url == "/mar"){
        let body = [];

        req.on("data", chunk =>{
            body.push(chunk);
        })
     .on("end", () =>{
        res.writeHead(200, {"Content-Type": "text/plain"});
        body = Buffer.concat(body).toString();
        var dias= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 
        'Jueves', 'Viernes', 'Sabado'];
        var date = new Date(body);
        var dia= date.getDay();
        res.end(`Tu día de nacimiento: ${dias[dia]} :)`);
    });       
}else{
    res.statusCode = 404;
    res.end();
    console.log("no naciste :(");
}
});
server.listen(8002);
console.log("Servidor en la url http://localhost:8002");