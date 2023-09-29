import mongoose from 'mongoose';

export const connectDB = async () => {
    
  try {
    await mongoose.connect('mongodb+srv://arechagafacundoet36:<Tolchaga500>@cluster0.qmgg2lh.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
  }
};