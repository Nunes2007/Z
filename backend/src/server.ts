import express, { urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routes/main';

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(urlencoded({ extended: true }));

server.use(mainRouter);

server.listen(process.env.PORT || 4000, () => {
    console.log('servidor rodando');
});
