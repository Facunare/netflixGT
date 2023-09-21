import app from './mongo.js';
import { connectDB } from './db.js';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();