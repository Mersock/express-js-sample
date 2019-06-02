//initail
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//public folder with html page
app.get('/', (req,res) => {
    console.log(path);
    res.sendFile(path.join(__dirname,'public','index.html'));
});

//start at port
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `);
})