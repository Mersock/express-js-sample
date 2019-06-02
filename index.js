//initail
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./middleware/logger');
const membersRoute = require('./routes/api/member');
const members = require('./members');


// init middleware
// app.use(logger);

//Handlebars midleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//render index views
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//request body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//members api route
app.use('/api/members', membersRoute);

//start at port
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `);
})