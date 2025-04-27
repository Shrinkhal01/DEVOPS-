const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For serving static files like CSS

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  res.send('Form submitted successfully!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend server running on http://localhost:${PORT}`);
});