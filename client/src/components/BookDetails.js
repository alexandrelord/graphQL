import { GET_BOOK } from '../queries/queries';
import { useQuery } from '@apollo/client';

const BookDetails = (props) => {
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: props.bookId }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const displayBookDetails = () => {
        const { book } = data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className="other-books">
                        {book.author.books.map((item) => {
                            return <li key={item.id}>{item.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div>No book selected...</div>;
        }
    };

    return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
