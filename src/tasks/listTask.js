//função de listar as tasks

import fs from "fs"


//função que lê o arquivo
  const readFromFile= fileName =>{
    if(!fs.existsSync(fileName)){
        return null
    }
    return fs.readFileSync(fileName,'utf-8')
}
//função de transformar o arquivo lido em um objeto 
const readJson = fileName =>{
 
    const readFile = readFromFile(fileName)

    if(!readFile){
        return readFile
    }
    return JSON.parse(readFile)
}
export {readFromFile}
export {readJson}