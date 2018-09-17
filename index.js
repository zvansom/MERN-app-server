// Require needed modules
const cors = require('cors');
const express = require('express');

// Declare app
const app = express();

// Middleware - Cross-origin resource sharing
app.use(cors());

// Include Controllers
app.use('/users', require('./controllers/users'));

// Middleware etc

// Define Routes 
app.get('*', (req, res) => {
	res.send({ message: 'error'});
});



// Listen on 3000
app.listen(3000);