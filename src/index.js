//Importar funções do util.js
import {validacao} from './utils.js'
//Importar funções dos tasks
import {addTask} from './tasks/addTask.js'
// Estrutura principal do CLI
const comando = process.argv[2];
const comando2 = process.argv[3]
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



