import { ApolloServer } from 'apollo-server';
import { Resolvers } from '../../resolvers-types';
// import mutations from '../apollo/graphql/mutations';
import queries, { getBasic } from '../apollo/graphql/queries';

import typeDefs from './graphql/typeDefs';

const resolvers: Resolvers = {
    // Mutation: {
    // ...mutations,
    // },
    Query: {
        getBasic,
    },
};

const server = new ApolloServer({ resolvers, typeDefs });
server.listen({ port: 4000 });
