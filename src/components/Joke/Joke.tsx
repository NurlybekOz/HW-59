import * as React from "react";


interface JokeProps {
    value: string;
}

const Joke: React.FC<JokeProps> = React.memo(({value}) => {
    return (
        <div className="Joke">
            {value}
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value;
});

export default Joke;
