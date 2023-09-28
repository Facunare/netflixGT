import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteMovies: [
      {
          type: String,
      }
  ]

})


export default mongoose.model('Users', userSchema)
