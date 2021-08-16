/**
 * 1. Create an express server
 * 2. Connect to MongoDB
 * 3. Create basic get route request
 * 4. Initialize express
 * 5. Initialize middleware
 * 6. Inject route
 * 7. Listen to app connection
 */
const express = require('express');
const connectDB = require('./db/main.js');
require('dotenv').config(); //allows for usage of environmental variables

//Initialize express
const app = express();

//connectDB();
//PORT
port = process.env.PORT || PORT

//Create basic get route request
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Bookstore App"});
});

//Listen to app connection
app.listen(function() {
  console.log(`Server is running and listening on: http://127.0.0.1:${port}`);
});