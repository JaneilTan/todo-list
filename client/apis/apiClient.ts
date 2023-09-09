import request from 'superagent'
import { Tasks } from '../../models/todos'

const rootUrl = '/api/v1'

export async function getTasks(){
  try {
    const dbTodo = await request.get(`${rootUrl}/todo`)
    return dbTodo.body
  } catch (err) {
    console.error('Error fetching todo')
  }
  
}

export async function addTasks(task: Tasks) {
  const addedTask = await request.post(rootUrl).send(task)
  return addedTask.body
}