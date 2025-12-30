const express = require('express');
const cors = require('cors');

const { logReqRes } = require('./Middleware/Logger')
const { connectDB } = require('./config/db.config')

const { productRouter } = require('./routes/productRouter')

const app = express();
PORT = 3000;

app.use(cors());
app.use(logReqRes('./logs/logger.txt'));
app.use(express.json());

connectDB('mongodb://localhost:27017/projectimsDB')
.then(()=>console.log("Connected to DB"));

app.use('/api/products', productRouter);

app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));