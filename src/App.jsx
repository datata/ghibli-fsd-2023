import './App.css'
import SelectGhibliTitle from './common/SelectGhibliTitle/SelectGhibliTitle';
// import useGetGhibliFilms from './hooks/useGetGhibliFilms'

function App() {

  // const [films] = useGetGhibliFilms();

  return (
    <>
      {/* {films.map(film => {
        return(
          <div key={film.id}>
            <h1>{film.original_title}</h1>
            <img src={film.image} alt="" width={300}/>
          </div>
        )
      })} */}

      <SelectGhibliTitle />
    </>
  )
}

export default App
