const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());  // Middleware to parse JSON request bodies
app.use(cors());  // Enable CORS for cross-origin requests

// Simulate database with an array of users
let users = [
  { email: 'user1@example.com', password: 'password1', username: 'User One', birthdate: '1990-01-01', age: 34 },
  { email: 'user2@example.com', password: 'password2', username: 'User Two', birthdate: '1985-05-10', age: 39 },
  { email: 'user3@example.com', password: 'password3', username: 'User Three', birthdate: '1995-11-20', age: 28 }
];

// Login route to authenticate users
app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json(user);  // Send the user data (without the password)
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Route to update user profile
app.post('/api/update-profile', (req, res) => {
  const { email, username, birthdate, age } = req.body;
  
  // Find the user in the "database" (users array)
  const userIndex = users.findIndex(u => u.email === email);
  if (userIndex > -1) {
    // Update user details
    users[userIndex] = { ...users[userIndex], username, birthdate, age };
    res.json(users[userIndex]);  // Return the updated user data
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
