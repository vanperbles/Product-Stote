import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRouter from './routes/product.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api/product', productRouter);

const port = process.env.PORT || 3031;
const localhost = process.env.LOCALHOST || 'localhost';




app.listen(port, localhost, () => {
    connectDB();
    console.log(`Server is running on port http://${localhost}:${port}`);
})