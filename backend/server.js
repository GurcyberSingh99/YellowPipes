const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// Example route for potential contact form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Here you would typically send an email or save to a database
  console.log('Received contact form submission:', { name, email, message });
  res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
