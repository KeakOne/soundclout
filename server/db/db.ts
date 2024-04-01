import { Songs } from '../../models/songs'
import connection from './connection'

const db = connection

export async function getSongs(): Promise<Songs[]> {
  return db('songs').select()
}

// export async function getSongById(id: number): Promise<Songs> {
//   return db('songs').where({ id }).select().first()
// }
export async function updateSong(id: number, newSong: string) {
  return db('songs')
    .where({ id })
    .update({ url: newSong, added_on: db.fn.now() })
}
