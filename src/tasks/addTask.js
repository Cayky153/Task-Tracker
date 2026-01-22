//Função de adicionar tasks

//Importando sistema d arquivos
import fs from "fs"
//Importando a função de ler o arquivo
import {readFromFile} from './listTask.js'


const addTask =(description1)=>{
  //le o arquivo 
  const data=readFromFile('./data/tasks.json')
  //transforma o que foi lido em um objeto, se não tiver nada, cria uma array
  const jsonData = data ? JSON.parse(data) : [];
  //sistema de id, se não tiver nenhum id, é 0 automaticamente, entretanto, ao criar uma task
  //o id é aumentado, e assim sai do 0, 
  let lastId = 0;
  if (jsonData.length > 0) {
    lastId = jsonData[jsonData.length - 1].id;
  }
  const nextId = lastId + 1;
  //formato da task adicionado, única coisa que o usuário insere é a descrição
  const task = {
    id:nextId,
    description:description1,
    status:"todo",
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
   //empurra o novo array com as novas tasks
  jsonData.push(task)
    
    fs.writeFile('./data/tasks.json',JSON.stringify(jsonData,null,2),(err)=>{
      if(err){
          console.error("Erro adicionando o arquivo: ",err)
      }
    console.log(`Task adicionada com sucesso!  ID: ${task.id} `)
    })
}
export {addTask}
