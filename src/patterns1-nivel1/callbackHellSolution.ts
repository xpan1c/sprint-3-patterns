import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");
const a = 2;
const reverseText = (str:string) => str.split("").reverse().join("");

async function handleError<T>(promise: Promise<T>, errorMessage:string): Promise <T> {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.error(errorMessage, error);
    throw error; // Rechaza la promesa para permitir un manejo de errores adicional si es necesario.
  }
}

(async function (): Promise<void> {
  const files = await handleError<string[]>(
    readdir(inbox),
    "Error: Folder inaccessible"
  );
  for (const file of files) {
    const rFile = await handleError<string>(readFile(join(inbox, file), "utf-8"),"Error: File error");
    await handleError<void>(
      writeFile(join(outbox, file), reverseText(rFile)),"Error: File could not be saved!")
    console.log(`${file} was successfully saved in the outbox!`)
  }
})();