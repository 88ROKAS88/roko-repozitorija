const userInfoOutput = document.getElementById("main");
let user = { firstName: "Rokas", lastName: "Misevicius" };
userInfoOutput.innerHTML =
  "<h2> User information </h2> <br/> <p> Vartotojo vardas : " +
  ` ${user["firstName"]} 
  , o pavarde 
  ${user["lastName"]} 
  </p>`;
