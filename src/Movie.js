import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

function Movie({name, price}) {
    const [movies, setMovies] = useContext(MovieContext)
    const deleteMovie = ()=>{
        setMovies(movies.filter(movie => movie.name !== name))
    }
    return (
        <div className='movie-div'>
            <h1>{name}</h1>
            <h3>${price}</h3>
            <button onClick={deleteMovie}>Delete</button>
        </div>
    );
}

export default Movie;