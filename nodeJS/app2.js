const arguments = process.argv.slice(2);
const fs = require("fs");
function createFileWithContent(fileName, content) {
  fs.writeFile(fileName, content, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("done");
    }
  });
}
createFileWithContent(arguments[0], arguments[1]);
