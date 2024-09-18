const express = require('express');
const app = express();
const port = 3001;

//author Harshit 
 
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});