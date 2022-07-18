// EXTERNAL API
const JSONPLACEHOLDER_URI = "https://jsonplaceholder.typicode.com/posts";
// ### Create and fill table ###
function createTableCell(parentElement, value) {
  let td = document.createElement("td");
  let tdValue = document.createTextNode(value);
  td.appendChild(tdValue);
  parentElement.appendChild(td);
}
function createTableRow(parentElement, data) {
  let row = document.createElement("tr");
  parentElement.appendChild(row);
  createTableCell(row, data.id);
  createTableCell(row, data.name);
  createTableCell(row, data.email);
}
function createTableHeader(parentElement, data) {
  let row = document.createElement("tr");
  parentElement.appendChild(row);
  tableHeaders = Object.keys(data[0]);
  for (let i of tableHeaders) {
    createTableCell(row, i);
  }
}
function createTable(parentElement, data) {
  const table = document.createElement("table");
  parentElement.appendChild(table);
  createTableHeader(table, data);
  for (let i of data) {
    createTableRow(table, i);
  }
}
//XML Http Request
function getXHR(link) {
  return new Promise(function (resolve) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
      if (this.status == 200) {
        let data = JSON.parse(this.responseText);
        resolve(data);
      }
    });
    xhr.open("GET", link);
    xhr.send();
  });
}
//XML Http Request no parse
function getXHRnp(link) {
  return new Promise(function (resolve) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
      if (this.status == 200) {
        let data = this.responseText;
        resolve(data);
      }
    });
    xhr.open("GET", link);
    xhr.send();
  });
}
//Fetch
function getFetch(link) {
  return new Promise(function (resolve) {
    fetch(link)
      .then((response) => response.json())
      .then((data) => resolve(data));
  });
}

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById("btn1");
const btnGetUser = document.getElementById("btn2");
const btnGetUsers = document.getElementById("btn3");
const btnGetPosts = document.getElementById("btn4");
const btnSendPost = document.getElementById("btn5");
//-- output
const textOutput = document.querySelector("#text");
const userOutput = document.querySelector("#user");
const usersOutput = document.querySelector("#users");
const postsOutput = document.querySelector("#posts");

// *** Functions ***
//OLD Version AJAX (XMLHttpRequest())
//-- Load Text File Information
async function loadTextFileXHR() {
  let data = await getXHRnp("http://localhost:8080/text");
  //display text
  textOutput.innerHTML = "";
  const text = document.createElement("p");
  textOutput.appendChild(text);
  let textValue = document.createTextNode(data);
  text.appendChild(textValue);
}

//-- Load User Information
async function loadUserXHR() {
  let data = await getXHR("http://localhost:8080/user");
  //display user information
  userOutput.innerHTML = "";
  const text = document.createElement("p");
  userOutput.appendChild(text);
  let textValue = document.createTextNode(
    `id: ${data.id}, name: ${data.name}, email: ${data.email}`
  );
  text.appendChild(textValue);
}

//-- Load Users information
async function loadUsersXHR() {
  console.log("if", getXHR);

  let data = await getXHR("http://localhost:8080/users");
  console.log("suveike", data);
  //display users information
  createTable(usersOutput, data);
}

//-- Load Users information
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  getFetch(JSONPLACEHOLDER_URI).then((data) => console.log(data));
}

// -- Sending data
function sendPostFETCH() {
  return;
}
// *** Events ***
btnGetTextFile.addEventListener("click", loadTextFileXHR);
btnGetUser.addEventListener("click", loadUserXHR);
btnGetUsers.addEventListener("click", loadUsersXHR);
btnGetPosts.addEventListener("click", loadPostsXHR);
btnGetPosts.addEventListener("click", loadPostsFETCH);
btnSendPost.addEventListener("click", sendPostFETCH);

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
