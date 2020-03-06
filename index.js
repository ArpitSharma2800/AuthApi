const express = require('express')
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts')
app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
    

dotenv.config();

mongoose.connect(process.env.DB,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
     () => console.log('connected to db')
     );



app.listen(3000, () => console.log('running'));