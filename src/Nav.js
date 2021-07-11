import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
    const [movies] = useContext(MovieContext)
    return (
        <div className='Nav'>
            <h1>Qaiser Mahmood</h1>
            <h3>Movies rented: {movies.length}</h3>
        </div>
    );
}

export default Nav;