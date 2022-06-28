// #### VARIABLES ####
const priceFrom = document.querySelector("#price-from");
const priceTo = document.querySelector("#price-to");
const home = document.querySelector("#home");
const priceImput = document.getElementById("price");
const list = document.getElementById("list");
let usersPrice = 0;

// #### FUNCTIONS ####
function displayProducts(product) {
  const newProduct = document.createElement("li");
  list.appendChild(newProduct);
  newProduct.className = "list-group-item";
  newProduct.innerHTML = ` ${product.showProtuctAndPrice()} ${product.checkForDiscount()}`;
}

function filterArr(max, min, priceto, pricefrom, all) {
  for (let i = 0; i < currentProducts.length; i++) {
    if (all) {
      displayProducts(currentProducts[i]);
    } else if (priceto) {
      if (currentProducts[i]["salePrice"] < max) {
        displayProducts(currentProducts[i]);
      }
    } else {
      if (currentProducts[i]["salePrice"] > min) {
        displayProducts(currentProducts[i]);
      }
    }
  }
}

// #### EVENT LISTENERS ####
priceImput.addEventListener("keyup", (e) => {
  usersPrice = document.getElementById("price").value;
});
priceFrom.addEventListener("click", () => {
  list.innerHTML = "";
  filterArr(9999, usersPrice, false, true, false);
  console.log(usersPrice);
});
priceTo.addEventListener("click", () => {
  list.innerHTML = "";
  filterArr(usersPrice, 0, true, false, false);
});
home.addEventListener("click", () => {
  list.innerHTML = "";
  filterArr(0, 0, false, false, true);
});

filterArr(0, 0, false, false, true);
