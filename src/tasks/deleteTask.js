//Função de deletar tasks

import fs from "fs"
import { readFromFile } from './listTask.js'

const deleteTask = (id) => {
    const taskId = id - 1
    //le o arquivo 
    const data = readFromFile('./data/tasks.json')
    //transforma o que foi lido em um objeto, se não tiver nada, cria uma array
    const jsonData = data ? JSON.parse(data) : [];

    const taskDeletada = jsonData[taskId]
    jsonData.splice(taskId, 1)
    fs.writeFile('./data/tasks.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error("Erro deletando o arquivo: ", err)
        }
        console.log(`Task ${taskDeletada.description} foi deletada com sucesso! `)
    })
}

export { deleteTask }