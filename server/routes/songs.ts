import Router from 'express'
import * as db from '../db/db.ts'

const router = Router()

//get /api/v1/songs
router.get('/', async (req, res) => {
  try {
    const songs = await db.getSongs()
    res.json(songs)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const newSong = req.body.url
  // console.log(id, newSong)
  try {
    await db.updateSong(id, newSong)
    res.sendStatus(204)
  } catch (error) {
    console.error(`Database error: ${error}`)
    res.sendStatus(500)
  }
})

export default router
