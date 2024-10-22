const http = require("http");

http.createServer((req, res) => {
    //Req es lo que me están pidiendo, y la res es lo que le vamos a responder

    // //res.writeHead(200, { "Content-type": "application/JSON" }); Mediante los headers, podemos responder lo que querramos
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv"); Esto es para decirle que va a ser un archivo que se va a descargar, y decirle el nombre del archivo
    // res.writeHead(200, { "Content-type": "application/csv" });

    res.write("Hola mundo");
    // res.write("1, Fernando\n"); //Estos son el formato del csv
    // res.write("2, Maria\n");
    // res.write("3, Pedro\n");

    res.end(); //Tenemos que finalizar el proceso, para poder mostrar la respuesta
}).listen();

console.log("Escuchando en el puerto", 8080);
