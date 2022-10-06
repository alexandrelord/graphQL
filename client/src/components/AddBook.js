import { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from '../queries/queries';

const AddBook = () => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const [addBook] = useMutation(ADD_BOOK);

    const { loading, error, data } = useQuery(GET_AUTHORS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const displayAuthors = () => {
        return data.authors.map((author) => {
            return (
                <option key={author.id} value={author.id}>
                    {author.name}
                </option>
            );
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addBook({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: GET_BOOKS }] // refetch the books list after adding a new book
        });
    };

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
};

export default AddBook;
