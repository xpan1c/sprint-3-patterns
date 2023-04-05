const { readdir, readFile, writeFile, read } = require("fs/promises");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");


const reverseText = (str) => str.split("").reverse().join("");

async function handleError(promise, errorMessage) {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.error(errorMessage, error);
    throw error; // Rechaza la promesa para permitir un manejo de errores adicional si es necesario.
  }
}

(async function () {
  const files = await handleError(
    readdir(inbox),
    "Error: Folder inaccessible"
  );
  for (const file of files) {
    const rFile = await handleError(readFile(join(inbox, file), "utf-8"),"Error: File error");
    const wFile = await handleError(
      writeFile(join(outbox, file), reverseText(rFile)),"Error: File could not be saved!")
    console.log(`${file} was successfully saved in the outbox!`)
  }
})();