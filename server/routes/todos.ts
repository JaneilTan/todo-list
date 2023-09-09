import { Router } from 'express'

import * as db from '../db/db.ts'

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

export default router
