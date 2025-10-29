import { ApolloServer } from "@apollo/server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolver"
import { expressMiddleware } from "@apollo/server/express4"

export const createGraphqlServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    return expressMiddleware(server, {
        context: async ({ req }) => ({ req })
    })

}