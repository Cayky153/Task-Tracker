//Função de adicionar tasks
import fs from "fs"
 const addTask =(description1)=>{
    const task = {
    id:Date.now(),
    description:description1,
    status:"todo",
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
    fs.writeFileSync('./data/tasks.json',JSON.stringify(task,null,2))
}
export {addTask}
