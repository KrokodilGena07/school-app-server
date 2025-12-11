require('dotenv/config');
const express = require('express');
const cors = require('cors');
const errorMiddleware = require('./middlewares/errorMiddleware');
const router = require('./router');
const db = require('./config/db');
require('./models/index');

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server startetd on PORT ${PORT}`));

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware);

const connecting = async () => {
    try {
        await db.authenticate();
        await db.sync();
    } catch (e) {
        console.log(e);
    }
};

connecting().then();