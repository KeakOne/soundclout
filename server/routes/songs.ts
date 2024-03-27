import Router from 'express'
import * as db from '../db/db.ts'

const router = Router()

//get /api/v1/songs
router.get('/', async (req, res) => {
  try {
    const songs = await db.getSongs()
    res.json(todos)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

//get /api/v1/todos/:id
// router.get('/:id', async (req, res) => {
//   const id = req.params.id
//   try {
//     const todo = await db.getTodoById(Number(id))
//     res.json(todo)
//   } catch (error) {
//     console.error(`Database error: ${error}`)
//     res.sendStatus(500)
//   }
// })

//post /api/v1/todos
// router.post('/', async (req, res) => {
//   try {
//     const newTodo = req.body
//     await db.addTodo(newTodo)
//     res.sendStatus(200)
//   } catch (error) {
//     console.error(`Database error: ${error}`)
//     res.sendStatus(500)
//   }
// })

//delete /api/v1/todos/:id
// router.delete('/:id', async (req, res) => {
//   const id = req.params.id
//   try {
//     await db.removeTodo(Number(id))
//     res.sendStatus(200)
//   } catch (error) {
//     console.error(`Database error: ${error}`)
//     res.sendStatus(500)
//   }
// })

// patch /api/v1/todos/:id
// router.patch('/:id', async (req, res) => {
//   const id = Number(req.params.id)
//   const todo = req.body.todo
//   try {
//     await db.updateTodo(id, todo)
//     res.sendStatus(204)
//   } catch (error) {
//     console.error(`Database error: ${error}`)
//     res.sendStatus(500)
//   }
// })

export default router
