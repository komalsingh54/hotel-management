import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet'

require('dotenv').config();

import { sequelize } from './config/database'
import hotelRoutes from './routes/hotel.route';

const app: Express = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(helmet());

app.use('/api/hotel', hotelRoutes);

sequelize.sync().then(() => {
    console.log('Connected to MySQL');
    app.listen(PORT, () => {
        console.log(`Hotel Service running on port ${PORT}`);
    });
}).catch((err: any) => console.log(err));
