import express from 'express';
import routes from './routes';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(
    process.env.DB_URI,
    {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err) => {
        if (err){
            throw err;
        }
    console.log('데이터베이스 연결 성공')
    },
);

app.listen(3002, () => {
    console.log('server on port: 3002');
});