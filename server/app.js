require('dotenv').config();
const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
})