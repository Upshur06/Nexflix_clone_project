import React, { useState } from 'react';

export default function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    return (
        <div>
            <h2>{title}</h2>

            <div className='posterImage'>
                {/* movies&&
                <img src={fetchUrl} alt='...' /> */}
))
            </div>
        </div>
    )
}
