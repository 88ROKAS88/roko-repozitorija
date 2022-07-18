const fs = require("fs");

const myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);
fs.appendFile(myArgs[0] + ".txt", myArgs[1], function (err) {
  if (err) throw err;
  console.log("Saved!");
});
