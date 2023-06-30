import './App.css'
import useGetGhibliFilms from './hooks/useGetGhibliFilms'

function App() {

  const [films] = useGetGhibliFilms();

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
