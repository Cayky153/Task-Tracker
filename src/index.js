//Importar funções do util.js
import {validacao} from './utils.js'
//Importar funções dos tasks
import {addTask} from './tasks/addTask.js'
import {readJson} from './tasks/listTask.js'
import {markTask} from './tasks/markTask.js'
import {updateTask}from './tasks/updateTask.js'
import {deleteTask}from './tasks/deleteTask.js'
// Estrutura principal do CLI
//Recebe as palavras do terminal
const comando = process.argv[2];
const comando2 = process.argv[3];
const comando3= process.argv[4];
//Validação
const valor=validacao(comando)

if(!valor.ok && valor.erro=='vazio'){
    console.error("Comando vazio, por favor, forneça um comando legível")
    process.exit(1)
}
if(!valor.ok && valor.erro=='tipo'){
    console.error("Comando fora do padrão desejado de string, por favor, forneça um novo comando")
    process.exit(1)
}

if(comando=='add'){
    addTask(comando2)
}
if(comando=="list"){
    
    console.log(readJson('./data/tasks.json'))
}
if(comando=="mark-in-progress"){
    markTask(comando2,'in-progress')
}
if(comando=="mark-done"){
    markTask(comando2,'done')
}
if(comando=="update"){
    updateTask(comando2,comando3)
}
if(comando=="delete"){
    deleteTask(comando2)
}



