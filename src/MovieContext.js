import React, { createContext, useState } from 'react';
export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name : 'Lion King',
            price : 10,
            id: 1
        },
        {
            name : 'Brave Heart',
            price : 15,
            id: 2
        },
        {
            name : 'The Lion of Dessert',
            price : 20,
            id: 3
        },
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};