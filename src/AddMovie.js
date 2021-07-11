import React, {useContext, useState} from 'react';
import { MovieContext } from './MovieContext';

function AddMovie() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)
    const updateName = e =>{
        setName(e.target.value)
    }
    const updatePrice = e =>{
        setPrice(e.target.value)
    }
    const formSubmit = e =>{
        e.preventDefault()
        setMovies(prevMovies =>[...prevMovies, {name:name, price:price, id:Math.floor((Math.random() * 1000000) + movies.length)}])
        setName('')
        setPrice('')
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type='text' name='name' placeholder='Movie name' onChange={updateName} value={name} />
                <input type='text' name='price' placeholder='Movie price' onChange={updatePrice} value={price} />
                <input type='submit' value='Add Movie' />
            </form>
        </div>
    );
}

export default AddMovie;