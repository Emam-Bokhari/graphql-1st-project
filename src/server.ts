// src/server.ts
import app from './app';
import mongoose from 'mongoose';
import { Server } from 'http';
import config from './app/config';
import { createGraphqlServer } from './app/graphql/createGraphqlServer';

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB Connected');

    // Apollo Middleware যোগ করো
    const graphqlMiddleware = await createGraphqlServer();
    app.use('/graphql', graphqlMiddleware);

    server = app.listen(config.port, () => {
      console.log(`Server is running on port: ${config.port}`);
      console.log(
        `GraphQL Playground: http://localhost:${config.port}/graphql`,
      );
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }
}

bootstrap();

process.on('unhandledRejection', () => {
  console.log(`Unhandled Rejection is detected, shutting down...`);
  if (server) {
    server.close(() => process.exit(1));
  } else {
    process.exit(1);
  }
});

process.on('uncaughtException', () => {
  console.log(`Uncaught Exception is detected, shutting down...`);
  process.exit(1);
});
