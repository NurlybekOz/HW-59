import MovieForm from "../../components/MovieForm/MovieForm.tsx";
import MovieList from "../../components/MovieList/MovieList.tsx";
import {useState} from "react";
import './Movies.css'
import { MovieProps } from "../../types";


const Movie = () => {
    const [movies, setMovies] = useState<MovieProps[]>([])

    const addMovies = (newMovie: MovieProps) => {
        setMovies(prevMovies => [...prevMovies, newMovie]);
    }
    const removeMovie = (idMovie: number) => {
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== idMovie));
    };
    const updateMovie = ({id, name}: MovieProps) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, name } : movie
            )
        );
    }

    return (
        <>
        <MovieForm onAdd={addMovies}></MovieForm>
        <MovieList movies={movies} onDelete={removeMovie} onUpdateMovie={updateMovie}></MovieList>
        </>
    );
};

export default Movie;