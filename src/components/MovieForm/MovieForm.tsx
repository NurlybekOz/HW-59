import {useState} from "react";
import {MovieProps} from "../../types";


interface Props {
    onAdd: (newMovie: MovieProps) => void;
}

const MovieForm: React.FC<Props> = ({onAdd}) => {
    const [title, setTitle] = useState<string>("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title) {
            const newMovie: MovieProps = {
                id: Date.now(),
                name: title,
            };
            onAdd(newMovie);
            setTitle("");
        }
    };


    return (
        <form className='d-flex justify-content-sm-between mb-2' style={{ width: '570px' }} onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={handleChange}
                style={{ width: '500px' }}
            />
            <button className='btn btn-primary' type="submit">Add</button>
        </form>
    );
};

export default MovieForm;