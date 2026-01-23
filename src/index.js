#!/usr/bin/env node



import { validacao } from './utils.js'
import { validarOuSair } from './utils.js'
import { addTask } from './tasks/addTask.js'
import { readFromFile } from './tasks/listTask.js'
import { readJson } from './tasks/listTask.js'
import { markTask } from './tasks/markTask.js'
import { updateTask } from './tasks/updateTask.js'
import { deleteTask } from './tasks/deleteTask.js'




const comando = process.argv[2];
const comando2 = process.argv[3];
const comando3 = process.argv[4];
//Validação
const comandoValido = validacao(comando)



if (!comandoValido.ok && comandoValido.erro == 'vazio') {
    console.error("Comando vazio, por favor, forneça um comando legível")
    process.exit(1)
}
if (!comandoValido.ok && comandoValido.erro == 'tipo') {
    console.error("Comando fora do padrão desejado de string, por favor, forneça um novo comando")
    process.exit(1)
}

//Usa os comandoValidoes do terminal para acessar as funções
/*
    Comandos disponíveis:
    -add <task>: adiciona uma nova tarefa
    -list [status]: lista todas tarefas adicionadas ou filtra por estados [todo,in-progress,done]
    -update <id> <novadescricao>: atualiza uma tarefa com uma nova descrição
    -delete <id>: deleta uma tarefa por meio do seu ID
    -mark-in-progress <id>: marca uma tarefa como em progresso por meio do seu id
    -mark-dones <id>: marca uma tarefa como feita por meio do seu id
*/
if (comando == 'add') {
    validarOuSair(comando2, 'Por favor, Insira a descricao da task')
    addTask(comando2)
}
if (comando == "list") {
    const taskList = readJson('./data/tasks.json')

    switch (comando2) {

        case "done":


            for (let x = 0; x < taskList.length; x++) {
                if (taskList[x].status == 'done') {
                    console.log(taskList[x])
                }
            }
            break;

        case "in-progress":


            for (let x = 0; x < taskList.length; x++) {
                if (taskList[x].status == 'in-progress') {
                    console.log(taskList[x])
                }
            }
            break;

        case "todo":




            for (let x = 0; x < taskList.length; x++) {
                if (taskList[x].status == 'todo') {
                    console.log(taskList[x])
                }
            }
            break;

        default:
            console.log(readJson('./data/tasks.json'));
    }
}
if (comando == "mark-in-progress") {
    validarOuSair(comando2, 'Por favor, Insira a task que deseja marcar')
    markTask(comando2, 'in-progress')
}
if (comando == "mark-done") {
    validarOuSair(comando2, 'Por favor, Insira a task que q deseja marcar')
    markTask(comando2, 'done')
}
if (comando == "update") {
    validarOuSair(comando2, 'Por favor, Insira a task que deseja mudar')
    validarOuSair(comando3, 'Por favor, Insira a nova descricao da task')
    updateTask(comando2, comando3)
}
if (comando == "delete") {
    const taskValida = validacao(comando2)
    validarOuSair(comando2, 'Por favor, Insira a task que deseja deletar')
    deleteTask(comando2)
}



