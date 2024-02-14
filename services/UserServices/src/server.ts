import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet'

require('dotenv').config();

import { sequelize } from './config/database'
import userRoutes from './routes/user.route';

const app: Express = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(helmet());

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
    console.log('Connected to MySQL');
    app.listen(PORT, () => {
        console.log(`User Service running on port ${PORT}`);
    });
}).catch((err: any) => console.log(err));
