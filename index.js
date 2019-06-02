//initail
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req,res) => {
    res.send('hello');
});

//start at port
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT} `);
})