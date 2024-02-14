import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet'

require('dotenv').config();

import { sequelize } from './config/database'
import bookingRoute from './routes/booking.route';

const app: Express = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(helmet());

app.use((req, res, next) => {
    console.log(req.body);
    next()
})
app.use('/api/booking', bookingRoute);

sequelize.sync().then(() => {
    console.log('Connected to MySQL');
    app.listen(PORT, () => {
        console.log(`User Service running on port ${PORT}`);
    });
}).catch((err: any) => console.log(err));
