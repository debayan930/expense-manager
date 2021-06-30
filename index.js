const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');
require('./services/passport');

mongoose.connect(mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));