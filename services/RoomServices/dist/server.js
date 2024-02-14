"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
require('dotenv').config();
const database_1 = require("./config/database");
const room_route_1 = __importDefault(require("./routes/room.route"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(body_parser_1.default.json());
app.use((0, helmet_1.default)());
app.use((req, res, next) => {
    console.log(req.body);
    next();
});
app.use('/api/room', room_route_1.default);
database_1.sequelize.sync().then(() => {
    console.log('Connected to MySQL');
    app.listen(PORT, () => {
        console.log(`User Service running on port ${PORT}`);
    });
}).catch((err) => console.log(err));
