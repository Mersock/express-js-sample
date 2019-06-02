//initail
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const members = require('./members');
const logger = require('./middleware/logger');


// init middleware
app.use(logger);

app.get('/api/members', (req, res) => res.json(members));


//Set static folder
// app.use(express.static(path.join(__dirname,'public')));

//start at port
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `);
})