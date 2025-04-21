const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5002;

// Dummy cart data (can be expanded)
let cart = [
  { id: 1, product: 'iPhone 14', quantity: 1, price: 999 },
  { id: 2, product: 'MacBook Pro', quantity: 2, price: 1999 },
];

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Get cart items
app.get('/cart', (req, res) => {
  res.json(cart);
});

// Add item to cart
app.post('/cart', (req, res) => {
  const { product, quantity, price } = req.body;
  const newItem = {
    id: cart.length + 1,
    product,
    quantity,
    price,
  };
  cart.push(newItem);
  res.status(201).json({ message: 'Item added to cart', newItem });
});

// Home route
app.get('/', (req, res) => {
  res.send('Cart Service is up and running!');
});

app.listen(PORT, () => {
  console.log(`Cart Service running on port ${PORT}`);
});
