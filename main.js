function findName(id, names) {
  for (let i = 0; i < names.length; i++) {
    if (id == names[i]["id"]) {
      return names[i]["name"];
    }
  }
}
//bootstrap
const tbody = document.querySelector("#tbody");
function bootstrap(stuff, names) {
  let string = "";
  for (let i = 0; i < stuff.length; i++) {
    string += ` <tr>
  <th scope="row">${stuff[i]["id"]}</th>
  <td>${findName(stuff[i]["userId"], names)}</td>
  <td>${stuff[i]["title"]}</td>
</tr>`;
  }
  tbody.innerHTML = string;
}
//function get posts normal stuff...
//function getPosts() {
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//}

/// promise ??! have no idea what Im doing ...
const promiseFunctionMayby = () => {
  return new Promise(function (resolve, reject) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });

    // resolve(response);

    // if (data) {
    //   console.log("still works3");
    //   resolve(data); // => then
    // } else {
    //  reject("something went wrong"); // => catch
    // }
  });
};

/// second promise ??! have no idea what Im doing ...
const secondPromiseFunctionMayby = () => {
  return new Promise(function (resolve, reject) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
};
// execution

document?.querySelector("button").addEventListener("click", async function () {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  try {
    let response = await promiseFunctionMayby();
    let response2 = await secondPromiseFunctionMayby();
    console.log(response2);
    console.log("success", response);
    bootstrap(response, response2);
  } catch (err) {
    console.warn(err.message);
  }
});
