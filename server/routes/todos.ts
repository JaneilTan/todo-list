import { Router } from 'express'

import * as db from '../db/db.ts'
import { addTasks } from '../db/db.ts'

const router = Router()

router.get('/', async (req, res) => {
  db.getTasks()
  .then((todo) => {
    res.json(todo)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

router.post('/', async (req, res) => {
  const task = req.body
  const addedTask = await addTasks(task)
  res.json(addedTask)
})
export default router
