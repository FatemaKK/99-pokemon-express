const { response } = require('express');
const express = require('express');
const pokemon = require('./models/pokemon.json');

const app = express();

app.get("/", (request, response) => {
    console.log("GET request received to route: /");
    response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (request, response) => {
    console.log("GET request received to route: /:verb/:adjective/:noun");
    const { verb, adjective, noun } = request.params
    response.send("Congratulations on starting a new project called " + verb + "-" + adjective + "-" + noun + "!");
});

app.get("/bugs", (request, response) => {
    console.log("GET request received to route: /bugs");
    const message = "99 little bugs in the code"
    const linkMessage = "Pull one down, patch it around" 
    response.send(`<h1>${message}</h1> 
    <a href="https://http://localhost:8888/bugs/101">${linkMessage}</a>`);
});

app.get("/bugs/:numberOfBugs", (request, response) => {
    console.log("GET request received to route: /bugs/:numberOfBugs");
    const { numberOfBugs } = request.params;
    if (numberOfBugs < 200) {
        response.send(`${numberOfBugs} little bugs in the code   <br> <br> <a href="http://localhost:8888/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
    } else {
       response.send(`<a href="http://localhost:8888/bugs">Too many bugs!! Start over!</a>`);
    }
});

app.get("/pokemon", (request, response) => {
    response.send(pokemon);
});
        

module.exports = app;