import express from 'express';
import './config/database.js';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
