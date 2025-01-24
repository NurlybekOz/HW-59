import './App.css'
import Movie from "./containers/Movie/Movie.tsx";
import Jokes from "./containers/Jokes/Jokes.tsx";
import {useState} from "react";

const App = () => {
    const [page, setPage] = useState<boolean>(false);

    return (

        <div className='container mt-3'>
            <button className='btn btn-light mb-2' onClick={() => setPage(!page)}>Change page</button>
            {page ?  <Movie/> : <Jokes/>}

        </div>
    )
};

export default App
