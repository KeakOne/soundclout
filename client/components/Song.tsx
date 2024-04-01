import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { Songs } from '../../models/songs.ts'
import * as api from '../apis/apiClient.ts'
// import { countdown } from '../../node_modules/countdown/countdown.js'
import { ChangeEvent, FormEvent, useState } from 'react'
export default function Song() {
  const [newSongs, setNewSongs] = useState(['', '', ''])

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({ id, newSong }: { id: number; newSong: string }) =>
      api.updateSong(id, newSong),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
    },
  })

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['songs'],
    queryFn: () => api.fetchSongs(),
  })
  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const handleSubmit = (event: FormEvent, id: number) => {
    event.preventDefault()
    const newSong = newSongs[id]
    console.log(newSong)
    mutation.mutate({ id: id + 1, newSong: newSong })
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const newArr = [...newSongs]
    newArr[id] = event.target.value
    setNewSongs(newArr)
  }

  const songs = data

  return (
    <div className="columns">
      {songs.map((song, index) => (
        <div key={index}>
          <div className="column">
            <p>in db url: {song.url}</p>
            <p>in db timestamp: {song.added_on}</p>
          </div>
          <form onSubmit={(event) => handleSubmit(event, index)}>
            <label htmlFor="url">Url:</label>
            {/* <p>{countdown(new Date(2000, 0, 1)).toString()}</p> */}
            <input
              value={newSongs[index]}
              onChange={(event) => handleChange(event, index)}
              type="text"
            />
            <button>Submit</button>
          </form>
        </div>
      ))}
      <p></p>
    </div>
  )
}
