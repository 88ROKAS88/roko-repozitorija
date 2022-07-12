//bootstrap
const tbody = document.querySelector("#tbody");
function bootstrap(stuff) {
  console.log("work?");
  let string = "";
  for (let i = 0; i < stuff.length; i++) {
    console.log(stuff);
    string += ` <tr>
  <th scope="row">${stuff[i][userid]}</th>
  <td>Mark</td>
  <td>Otto</td>
</tr>`;
  }
  tbody.innerHTML = string;
}
//function get posts normal stuff...
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/// promise ??! have no idea what Im doing ...
const promiseFunctionMayby = () => {
  console.log("someting something");

  return new Promise(function (resolve, reject) {
    console.log("still works0");

    console.log("still works1");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("still works2", data);
    // resolve(response);

    if (data) {
      console.log("still works3");
      resolve(data); // => then
    } else {
      reject("something went wrong"); // => catch
    }
  });
};

// execution

document?.querySelector("button").addEventListener("click", async function () {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  try {
    let response = await promiseFunctionMayby();

    console.log("success", response);
    bootstrap(response);
  } catch (err) {
    console.warn(err.message);
  }
});
