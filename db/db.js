require('dotenv').config(); // Server.js ya index.js ke shuruat mein

const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;
