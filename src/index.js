const express = require('express');
const { config } = require('dotenv');
const mongoose = require('mongoose');

config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL).then(() => {
  app.listen(3000, () => {
    console.log('server listening at port 3000');
  });
}).catch((err) => {
  console.error('failed to connect to db', err);
});