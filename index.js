const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // to read JSON data

// GET route - test if API works
app.get('/', (req, res) => {
  res.send('Hello from Feysals Node.js API');
});

// POST route - save a contact
let contacts = [];
app.post('/contact', (req, res) => {
  const contact = req.body;
  contacts.push(contact);
  res.json({ message: 'Contact saved', data: contact });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
