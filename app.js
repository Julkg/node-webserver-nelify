require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estático
app.use(express.static("public")); //Esto equivale al "/" usualmente el static llama el path de la carpeta public porque es el html que todos pueden visitar sin auth

//IMPORTANTE// El archivo se tiene que llamar index.h

//Para definir rutas publicas las hacemos en forma de carpetas y si ya tenemos una ruta con el mismo nombre, va a priorizar la publica

// app.get("/hola-mundo", (req, res) => {
//     res.send("Hola mundo en su respectiva ruta");
// });

app.get("/", (req, res) => {
    res.render("home", {
        nombre: "Julian Figueroa",
        titulo: "Curso de Node",
    });
});

app.get("/generic", (req, res) => {
    res.render("generic", {
        nombre: "Julian Figueroa",
        titulo: "Curso de Node",
    });
});

app.get("/elements", (req, res) => {
    res.render("elements", {
        nombre: "Julian Figueroa",
        titulo: "Curso de Node",
    });
});

app.listen(port, () => {
    console.log(`La aplicación esta corriendo en el http://localhost:${port}`);
});
