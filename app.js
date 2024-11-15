const fs = require('fs')
let data = fs.readFileSync('data.json', 'utf-8')
let JSONtasks = JSON.parse(data)

const addTask = (task) => {
  let id
  JSONtasks.length > 0
    ? (id = JSONtasks[JSONtasks.length - 1].id + 1)
    : (id = 1)

  task = {
    id: id,
    task,
  }
  JSONtasks.push(task)
  taskJSON = JSON.stringify(JSONtasks)
  fs.writeFileSync('data.json', taskJSON, 'utf-8')
}

const update = (id, updatedTask) => {
  JSONtasks.find((task) => task.id == id).task ? updatedTask : ''
  fs.writeFileSync('data.json', JSON.stringify(JSONtasks), 'utf-8')
}

const deleteTask = (id) => {
  updatedJSON = JSONtasks.filter((task) => task.id != id)
  fs.writeFileSync('data.json', JSON.stringify(updatedJSON), 'utf-8')
}

const argument = process.argv[2]

switch (argument) {
  case 'add':
    {
      const taskName = process.argv[3]
      addTask(taskName)
      console.log(`Task added successfully (ID: ${JSONtasks.length})`)
    }
    break
  case 'update': {
    const id = process.argv[3]
    const taskName = process.argv[4]
    update(id, taskName)
    console.log('updated task')
  }
  case 'delete': {
    const id = process.argv[3]
    deleteTask(id)
    console.log('deleted task')
  }
  default:
    break
}
