import {useEffect, useState} from "react";
import Joke from "../../components/Joke/Joke.tsx";
import {JokeProps} from "../../types";


const Jokes = () => {
    const [joke, setJoke] = useState<JokeProps | null>(null);
    const url = 'https://api.chucknorris.io/jokes/random';



    const fetchData = async () => {
        const response = await fetch(url);

        if (response.ok) {
            const joke: JokeProps = await response.json();
            setJoke(joke);
        }

    };

    useEffect(() => {
        fetchData().catch(e => console.error(e));
    }, []);



    return (
        <div className='container'>
            <div className='Jokes'>
                {joke === null ? (
                    <p>Loading...</p>
                ) : (
                    <Joke value={joke.value}
                          key={joke.id} />
                )}
                <button type='button' className='btn btn-primary mt-2' onClick={fetchData}>get Joke</button>
            </div>
        </div>
    );
};

export default Jokes;