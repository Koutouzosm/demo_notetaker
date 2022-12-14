const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes.js');


// Initalize the app cand creating the port
const app = express();
const PORT = process.env.PORT || 3001;


// import our routes
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/', htmlRoutes);


// Starting server on PORT
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))
