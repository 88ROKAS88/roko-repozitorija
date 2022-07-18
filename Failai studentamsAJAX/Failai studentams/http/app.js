// https://nodejs.org/api/http.html

const fs = require("fs");
const http = require("http");

http
  .createServer(async function (request, response) {
    console.log("request.url: ", request.url);

    if (request.url === "/") {
      const content = fs.readFileSync("../index.html");
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      // response.write(content);
      response.end(content);
    } else if (request.url == "/script.js") {
      const content = fs.readFileSync("../script.js");
      response.writeHead(200, {
        "Content-Type": "text/javascript",
      });
      //response.write(content);
      response.end(content);
    } else if (request.url === "/text") {
      const content = fs.readFileSync("../sample.txt");
      response.writeHead(200, {
        "Content-Type": "text/plain",
      });
      //response.write(content);
      response.end(content);
    } else if (request.url === "/user") {
      const content = fs.readFileSync("../user.json");
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      //response.write(content);
      response.end(content);
    } else if (request.url === "/users") {
      const content = fs.readFileSync("../users.json");
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      //response.write(content);
      response.end(content);
    } else {
      response.writeHead(404);
      response.end("restricted path");
    }
  })
  .listen(8080);
