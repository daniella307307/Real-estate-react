const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const db= require('./config/database');
require('dotenv').config();

const app = express();
const PORT =process.env.PORT || 3000
app.use(bodyParser.json());
app.use(cors());
db();

app.listen(PORT,console.log(`App is listening on port:${PORT}`) )