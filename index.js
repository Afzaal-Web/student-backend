const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const Student = require('./Student');

const app = express();
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// POST route to register a student
app.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    console.log('Student saved:', student);
    res.status(200).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Error saving student:', error.message);
    res.status(500).json({ error: 'Failed to register student' });
  }
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find(); // Fetch all students from DB
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
