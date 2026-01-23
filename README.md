# Task-Tracker
---


## Sobre
Um projeto simples de um rastreador de tarefas feito utilizando CLI e File System,  que rastreia o que você precisa fazer, o que você fez, e o que você está atualmente fazendo. Projeto feito com o intuito de praticar os estudos em backend.

## Estrutura do projeto 
```
Task-Tracker-CLI/
├── src/
│   ├── index.js          # Ponto de entrada da CLI
│   ├── utils.js          # Funções utilitárias (validação)
│   ├── tasks/
│   │   ├── addTask.js
│   │   ├── listTask.js
│   │   ├── updateTask.js
│   │   ├── deleteTask.js
│   │   └── markTask.js
│   └── data/
│       └── tasks.json    # Persistência de dados (JSON)
├── package.json
├── package-lock.json
└── README.md
```
## Tecnologias
Esse projeto foi feito utilizando a linguagem JavaScript, usando Node.js e um arquivo JSON que foi utilizado como um banco de dados local para persistencia das tarefas.

## Desenvolvedor
Antônio Pedro Cayky Do Nascimento Pereira - Estudante de Sistemas e Mídias Digitais na Universidade Federal do Ceará

## Como rodar
**1. Clonando o repositório**
```
git clone https://github.com/Cayky153/Task-Tracker
cd Task-Tracker/
```

**2. Utilize os comandos**
* **Adicione uma task**
```
task-cli add <task>
```
* **Liste as tasks**
```
task-cli list
task-cli list todo
task-cli list in-progress
```
* **Atualize uma task**
```
task-cli update <ID> <description>
```
* **Delete uma task**
```
task-cli delete <ID>
```
* **Marque uma task**
```
task-cli mark-in-progress <ID>
task-cli mark-done <ID>
```

## Formato do arquivo Json
```
{
    "id": 1,
    "description": "estudar",
    "status": "done",
    "createdAt": "2026-01-22T20:57:17.828Z",
    "updatedAt": "2026-01-23T18:32:18.429Z"
  }
```



## Link do projeto

https://roadmap.sh/projects/task-tracker