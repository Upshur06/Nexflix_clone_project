import React, { useState, useEffect } from 'react';
import axios from '../axios';


export default function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    const base_url = 'http://image.tmdb.org/t/p/original';

        console.log(movies)
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {
                    movies&&
                    movies.map((movie) =>(
                        <img 
                            className='row_poster' 
                            src={`${base_url}${movie.poster_path}`} 
                            alt={movie.name} 
                        />
                    ))
        
                }
            </div>
        </div>
    )
}
