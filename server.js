import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import destinationRoutes from './routes/destinationRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api/destinations', destinationRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Travel API!');
});

export default app; // 🔥 this is key for Vercel
