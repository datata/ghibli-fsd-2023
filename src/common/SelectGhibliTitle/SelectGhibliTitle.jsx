import { useState } from "react"
import useGetGhibliFilms from "../../hooks/useGetGhibliFilms"

const SelectGhibliTitle = () => {
  
  const [films] = useGetGhibliFilms()

  const [selectedOption, setSelectedOption] = useState("")

  const selectHandler = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <>
      <select name="" id="" onChange={selectHandler}>
        <option value="">Select Film</option>
        {
          films.map(film => {
            return (
              <option key={film.id} value={film.image}>{film.title}</option>
            )
          })
        }
      </select>

      <div>
      <img src={selectedOption} alt="" /> 
        </div>   
    </>
  )
}

export default SelectGhibliTitle