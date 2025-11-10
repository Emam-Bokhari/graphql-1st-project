import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Health check
app.get('/', (req, res) => {
  res.send('GraphQL Server is running...');
});


export default app;
