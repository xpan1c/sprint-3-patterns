import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str: string) => str.split("").reverse().join("");

const handleError = async<T>(promise: Promise<T>, errorMessage: string): Promise<T> =>{
  try {
    const result = await promise;
    return result;
  } catch (error) {
    console.error(errorMessage, error);
    return Promise.reject(error);
  }
}

const readDirectory = async (path: string): Promise<string[]> => {
  return handleError<string[]>(readdir(path), "Error: Folder inaccessible")
}

const readFileContent = async (path: string) => {
  return handleError<string>(readFile(path, "utf-8"), "Error: File error")
}

const writeFileContent = async (path: string, content: string): Promise<void> => {
  return handleError<void>(writeFile(path, content), "Error: File could not be saved!")
}

const processFile = async (file: string): Promise<void> => {
  const rFile = await readFileContent(join(inbox, file));
  await writeFileContent(join(outbox, file), reverseText(rFile));
  console.log(`${file} was successfully saved in the outbox!`);
}

(async () => {
  const files = await readDirectory(inbox);
  await Promise.all(files.map(processFile))
})();

