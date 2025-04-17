import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import destinationRoutes from './routes/destinationRoutes.js';
import userRoutes from './routes/userRoutes.js';
var cors = require('cors')

dotenv.config();

const app = express(); 

app.use(cors())

app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/destinations', destinationRoutes); 
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Travel API!');
}
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
