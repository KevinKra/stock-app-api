import { ApolloServer } from 'apollo-server';
import { Resolvers } from '../../resolver-types';
// import mutations from '../apollo/graphql/mutations';
import { getDataByTicker } from '../apollo/graphql/queries';

import typeDefs from './graphql/typeDefs';

const resolvers = {
    // Mutation: {
    // ...mutations,
    // },
    Query: {
        getDataByTicker,
    },
};

const server = new ApolloServer({ resolvers, typeDefs });
server.listen({ port: 4000 });
