import Song from './Song'
function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">{<Song />}</section>
    </>
  )
}

export default App
