//CREAR UNA FUNCION EN NODE QUE RECIBA UNA CADENA DE TEXTO Y LO CONVIERTA EN CAMEL CASE USANDO STREAMS
const {Transform} = require("stream");

const camelStream= new Transform({
    transform(chunk,callback){
        const data = chunk.toString();
        data.split(" ").map((palabra) =>{

            this.push(palabra.charAt(0).toUpperCase()+
            palabra.slice(1));
        });
    }
});

process.stdin.pipe(camelStream).pipe(process.stdout);