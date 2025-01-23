import * as React from "react";
import {MovieProps} from "../../types";

interface EditProps {
    id: number;
    name: string;
}


interface Props {
    movies: MovieProps[],
    onDelete: (idMovie: number) => void,
    onUpdateMovie: (editProps : EditProps) => void,
}


const MovieList: React.FC<Props> = React.memo(({movies, onDelete, onUpdateMovie}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const newName = e.target.value;
        onUpdateMovie({ id, name: newName });
    };
    return (
        <div>
            <span className='mb-2'>To watch list:</span>
            {movies.map(movie => (
                <div className='movie' key={movie.id}>
                    <input type="text"
                           className='movie-input'
                           value={movie.name}
                           onChange={(e) => handleChange(e, movie.id)}
                          />

                    <button className='btn btn-dark' onClick={() => onDelete(movie.id)}>X</button>
                </div>
            ))}
        </div>
    );
});

export default MovieList;