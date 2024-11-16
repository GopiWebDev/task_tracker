const fs = require('fs')

let data
let JSONtasks

// checks if json file exists and creates one if not
const fileExists = fs.existsSync('./data.json')
if (!fileExists) {
  fs.writeFileSync('data.json', JSON.stringify([], null, 2), 'utf-8')
  JSONtasks = []
} else {
  data = fs.readFileSync('data.json', 'utf-8')
  // parsing json and saving to JSONtasks to use javascript functions
  JSONtasks = JSON.parse(data)
}

// function to add a task
const addTask = (task) => {
  let id
  JSONtasks.length > 0
    ? (id = JSONtasks[JSONtasks.length - 1].id + 1)
    : (id = 1)

  // create task object with necessary details
  task = {
    id: id,
    task,
    status: 'todo',
    createdAt: new Date().toLocaleString().replace(',', ''),
    updatedAt: null,
  }

  // push the new task to JSONtasks
  JSONtasks.push(task)
  // update the original json file with updated one
  fs.writeFileSync('data.json', JSON.stringify(JSONtasks), 'utf-8')
  console.log(`Task added successfully (ID: ${task.id})`)
}

// function to update tasks
const update = (id, updatedTask) => {
  // check if the task with id exists and update its task and time
  if (JSONtasks.find((task) => task.id == id)) {
    JSONtasks.find((task) => task.id == id).task = updatedTask

    JSONtasks.find((task) => task.id == id).updatedAt = new Date()
      .toLocaleString()
      .replace(',', '')

    fs.writeFileSync('data.json', JSON.stringify(JSONtasks), 'utf-8')
    console.log('task updated')
  } else {
    console.log('no task found')
  }
}

// function to delete tasks
const deleteTask = (id) => {
  // check if task with id exists and filtering out and updating json
  if (JSONtasks.find((task) => task.id == id)) {
    updatedJSON = JSONtasks.filter((task) => task.id != id)
    fs.writeFileSync('data.json', JSON.stringify(updatedJSON), 'utf-8')
    console.log('deleted task')
  } else {
    console.log('task not found')
  }
}

// function to mark in-progress
const markInProgress = (id) => {
  // check if task with id exists and updating it's status
  if (JSONtasks.find((task) => task.id == id)) {
    JSONtasks.find((task) => task.id == id).status = 'in-progress'
    fs.writeFileSync('data.json', JSON.stringify(JSONtasks), 'utf-8')
    console.log('successfully marked in-progress')
  } else {
    console.log('task not found')
  }
}

// function to mark done
const markDone = (id) => {
  // check if task with id exists and updating it's status
  if (JSONtasks.find((task) => task.id == id)) {
    JSONtasks.find((task) => task.id == id)['status'] = 'done'
    fs.writeFileSync('data.json', JSON.stringify(JSONtasks), 'utf-8')
    console.log('successfully marked done')
  } else {
    console.log('task not found')
  }
}

// function to filter based on argument
const filter = (status) => {
  switch (status) {
    case 'done':
      return JSONtasks.filter((task) =>
        task.status === 'done' ? console.log(task) : ''
      )
    case 'in-progress':
      return JSONtasks.filter((task) =>
        task.status === 'in-progress' ? console.log(task) : ''
      )
    case 'todo':
      return JSONtasks.filter((task) =>
        task.status !== 'done' && task.status !== 'in-progress'
          ? console.log(task)
          : ''
      )
    default:
      break
  }
}

const argument = process.argv[2]

// switch case depending on argument
switch (argument) {
  case 'add': {
    const taskName = process.argv[3]
    return addTask(taskName)
  }
  case 'update': {
    const id = process.argv[3]
    const taskName = process.argv[4]
    return update(id, taskName)
  }
  case 'delete': {
    const id = process.argv[3]
    return deleteTask(id)
  }
  case 'mark-in-progress': {
    const id = process.argv[3]
    return markInProgress(id)
  }
  case 'mark-done': {
    const id = process.argv[3]
    return markDone(id)
  }
  case 'list': {
    const status = process.argv[3]
    if (!status) JSONtasks.map((task) => console.log(task))
    return filter(status)
  }
  default:
    break
}
