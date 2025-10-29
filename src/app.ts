import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// parser
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
  res.send("Server is running...");
});

app.get('/health', (req: Request, res: Response) => {
  res.send('Server is running...');
});



export default app;