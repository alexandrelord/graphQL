import { gql } from '@apollo/client';

// Query
export const GET_AUTHORS = gql`
    query GetAuthors {
        authors {
            name
            id
        }
    }
`;

export const GET_BOOKS = gql`
    query GetBooks {
        books {
            name
            id
        }
    }
`;

export const GET_BOOK = gql`
    query GetBook($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

// Mutation
export const ADD_BOOK = gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId) {
            name
            id
        }
    }
`;

// $name, $genre, $authorId are variables that we can pass to the mutation
// String! and ID! - ! means that the variable is required
