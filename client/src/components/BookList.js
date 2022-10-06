import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    const [selected, setSelected] = useState(null);
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const displayBooks = () => {
        return data.books.map((book) => {
            return (
                <li key={book.id} onClick={(e) => setSelected(book.id)}>
                    {book.name}
                </li>
            );
        });
    };

    return (
        <div>
            <ul id="book-list">{displayBooks()}</ul>
            <BookDetails bookId={selected} />
        </div>
    );
};

export default BookList;
