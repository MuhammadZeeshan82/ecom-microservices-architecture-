const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Dummy products
const products = [
  { id: 1, name: 'iPhone 14', price: 999 },
  { id: 2, name: 'MacBook Pro', price: 1999 },
];

// Endpoint to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Home route
app.get('/', (req, res) => {
  res.send('Product Service is up and running!');
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
