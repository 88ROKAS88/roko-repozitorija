const fs = require("fs");
const http = require("http");

const whiteList = [
  "index.html",
  "script.js",
  "sample.txt",
  "user.json",
  "users.json",
];

function getUrl(value) {
  console.log("get url", value);
  if (value == "index.html") {
    return "/";
  }
  const index = value.indexOf(".");
  return value.substr(0, index);
}

function getContentType(value) {
  const index = value.indexOf(".");
  const extension = value.substr(index + 1);
  console.log("get content type", extension);
  if (extension == "txt") {
    return "text/plain";
  }
  if (extension == "json") {
    return "application/json";
  }
  if (extension == "js") {
    return "text/javascript";
  }
  if (extension == "html") {
    return "text/html";
  }
}

function request(fileName) {
  console.log(fileName, getContentType(fileName), getUrl(fileName));
  if (request.url === getUrl(fileName)) {
    const content = fs.readFileSync("../" + fileName);
    response.writeHead(200, {
      "Content-Type": getContentType(fileName),
    });
    return response.end(content);
  }
}

//TEST TEST TEST
for (let i of whiteList) {
  request(i);
}

/*
http
  .createServer(async function (request, response) {
    console.log("request.url: ", request.url);
    for (let i of whiteList) {
      request(i);
    }
  })
  .listen(8080);
*/
