//initail
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./middleware/logger');
const membersRoute = require('./routes/api/member');


// init middleware
// app.use(logger);

//request body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//members api route
app.use('/api/members', membersRoute);

//start at port
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `);
})