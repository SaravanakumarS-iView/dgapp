import { useEffect, useState } from 'react'
import MovieList from '../MovieList/MovieList'
import { getMovies } from '../../services/moviesSvc'

const GenreList = () => {
    const [selectedGenre, setSelectedGenre] = useState('Romantic Comedy')
    const [movies, setMovies] = useState([])
    const [pagination, setPagination] = useState({ currPage: 0, totalItems: 0 })

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const { currPage, totalItems } = pagination

        if ((totalItems === movies.length) && currPage) {
            return
        }

        const data = await getMovies(currPage)
        const newMovies = data.page['content-items'].content
        const newCurrPage = parseInt(data.page['page-num-requested'])
        const newTotalItems = parseInt(data.page['total-content-items'])

        setPagination({ currPage: newCurrPage, totalItems: newTotalItems })
        setMovies((movies) => [...movies, ...newMovies])
    }

    return (
        <>
            {selectedGenre ?
                <MovieList title={selectedGenre} movies={movies} fetchMovies={fetchMovies} />
                : <></>
            }
        </>
    )
}

export default GenreList