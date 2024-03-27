import { Songs } from '../../models/songs'
import connection from './connection'

const db = connection

export async function getSongs(): Promise<Songs[]> {
  return db('songs').select()
}
