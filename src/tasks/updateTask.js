//Função para adicionar task

//Importando file system
import fs from 'fs'
//Importando a função de ler o arquivo
import {readFromFile} from './listTask.js'


const updateTask=(id,desc)=>{
    //Recebe e guarda os valores da função
    const taskId=id-1
    const newDesc=desc
    //le o arquivo 
    const data=readFromFile('./data/tasks.json')
    //transforma o que foi lido em um objeto, se não tiver nada, cria uma array
    const jsonData = data ? JSON.parse(data) : [];
    

    const newTask = {
    id:jsonData[taskId].id,
    description:newDesc,
    status:jsonData[taskId].status,
    createdAt:jsonData[taskId].createdAt,
    updatedAt:new Date().toISOString()
  };
  jsonData[taskId]=newTask
  fs.writeFile('./data/tasks.json',JSON.stringify(jsonData,null,2),(err)=>{
        if(err){
            console.error("Erro atualizando o arquivo: ",err)
        }
      console.log(`Task atualizada com sucesso!  ID: ${newTask.id} `)
      })
}

export {updateTask}