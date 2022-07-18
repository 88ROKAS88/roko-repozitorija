//const os = require("os");
//const cpuInfo = os.cpus();
//console.log("number of threads = " + cpuInfo.length);
//console.log("cpu name = " + os.cpus()[0].model);

// #### ADDING NECESARY MODULES ####
//WORKING WITH FILES
var fs = require("fs");
//GETTING USER INPUT
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// #### GETTING IMPUT ####
//First promise - file name
const promiseForFileName = () => {
  return new Promise(function (resolve, reject) {
    readline.question("please enter file name ", (fName) => {
      resolve(fName);
      readline.close();
    });
  });
};
//Second promise - file content
const promiseForFileContent = () => {
  return new Promise(function (resolve, reject) {
    readline.question(
      "Please enter text u want in ur text file ",
      (fContent) => {
        resolve(fContent);
        readline.close();
      }
    );
  });
};
promiseForFileName();
promiseForFileContent();

//#### USING IMPUT TO EXECUTE CODE ####
async function waitForFileNameAndContent() {
  try {
    let fileName = await promiseForFileName();
    let fileContent = await promiseForFileContent();
    //Create file
    fs.appendFile(fileName + ".txt", fileContent, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  } catch (err) {
    console.warn(err.message);
  }
}
