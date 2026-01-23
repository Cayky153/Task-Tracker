//Função para adicionar task

//Importando file system
import fs from 'fs'
//Importando a função de ler o arquivo
import { readFromFile } from './listTask.js'


const markTask = (id, type) => {
  //Recebe e guarda os valores da função
  const taskId = id - 1
  const markType = type
  //le o arquivo 
  const data = readFromFile('./data/tasks.json')
  //transforma o que foi lido em um objeto, se não tiver nada, cria uma array
  const jsonData = data ? JSON.parse(data) : [];

  //Cria um novo objeto que mantem tudo do anterior, apenas mudando o status
  const newTask = {
    id: jsonData[taskId].id,
    description: jsonData[taskId].description,
    status: markType,
    createdAt: jsonData[taskId].createdAt,
    updatedAt: new Date().toISOString()
  };
  //troca o objeto antigo selecionado por meio do taskID pela nova task com o status atualizado
  jsonData[taskId] = newTask
  //empurra o novo array com as novas tasks
  fs.writeFile('./data/tasks.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error("Erro marcando o arquivo: ", err)
    }
    console.log(`Task marcada com sucesso!  ID: ${newTask.id} `)
  })
}

export { markTask }