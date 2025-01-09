const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT =process.env.PORT || 3000
app.use(bodyParser.json());
app.use(cors());


app.listen(PORT,console.log(`App is listening on port:${PORT}`) )