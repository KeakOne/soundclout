import request from 'superagent'
import { Songs } from '../../models/songs'
const rootUrl = '/api/v1/songs'

export async function fetchSongs(): Promise<Songs[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function updateSong(id: number, newSong: string): Promise<void> {
  await request.patch(`${rootUrl}/${id}`).send({ url: newSong })
}
