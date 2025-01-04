import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from '../../lib/connectDB.js';

dotenv.config();
const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

// Sample Route
app.get('/', (req, res) => {
    res.send('API is working');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is some data' });
});

// Start Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
