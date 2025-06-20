const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://fsdgrgrgerfgyergtdfger',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('✅ MongoDB Atlas connected');
  } catch (err) {
    console.error('❌ Connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
