import mongoose from 'mongoose';

export const connectDB = async () => {
    
  try {
    await mongoose.connect('mongodb://127.0.0.1/netflixGT');
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
};