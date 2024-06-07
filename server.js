const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'feedback'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  const sql = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
  connection.query(sql, [name, email, message], (err, result) => {
    if (err) throw err;
    res.send('Feedback submitted successfully');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
