import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [films, setFilms] = useState([])

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
      .then(res => res.json())
      .then(res => setFilms(res))
      .catch(error => console.log(error))

  }, [])

  return (
    <>
      {films.map(film => {
        return(
          <div key={film.id}>
            <h1>{film.original_title}</h1>
            <img src={film.image} alt="" width={300}/>
          </div>
        )
      })}
    </>
  )
}

export default App
