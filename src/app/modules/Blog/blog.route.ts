import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

import { blogTypeDefs } from './blog.schema';
import { blogResolvers } from './blog.resolver';


export const createBlogGraphqlServer = async () => {
  const server = new ApolloServer({
    typeDefs: blogTypeDefs,
    resolvers: blogResolvers,
  });

  await server.start();


  return expressMiddleware(server, {
    context: async ({ req }) => ({ req }),
  });
};