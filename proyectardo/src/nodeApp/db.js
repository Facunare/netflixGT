import mongoose from 'mongoose';

export const connectDB = async () => {
    
  try {
    await mongoose.connect('mongodb+srv://arechagafacundoet36:<S9qpkv2hVkyFdE8j>@cluster0.qmgg2lh.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
};