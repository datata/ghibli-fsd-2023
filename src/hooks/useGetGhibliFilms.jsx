import { useEffect, useState } from "react"

const useGetGhibliFilms = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.vercel.app/films')
        .then(res => res.json())
        .then(res => setFilms(res))
        .catch(error => console.log(error))
    }, [])

    return [films, setFilms]
}

export default useGetGhibliFilms