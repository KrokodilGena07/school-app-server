require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./router');
const db = require('./config/db');
require('./models/index');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server startetd on PORT ${PORT}`));

const connecting = async () => {
    try {
        await db.authenticate();
        await db.sync();
    } catch (e) {
        console.log(e);
    }
};

connecting().then();