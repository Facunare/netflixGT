import User from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "./config.js";
import { createAccessToken } from "./jwt.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userFound = await User.findOne({ username });

    if (userFound)
      return res.status(400).json({
        message: ["The username is already in use"],
      });

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });
    console.log(userFound)
    if (!userFound)
      return res.status(400).json({
        message: ["The username does not exist"],
      });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
      favoriteMovies: userFound.favoriteMovies 
    });

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      favoriteMovies: userFound.favoriteMovies
    });
  } catch (error) {
    
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const token  = req.cookies['token']
  if (!token) return res.send(false);
  console.log("El otro: ", TOKEN_SECRET)
  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);
    return res.json({
      id: userFound._id,
      username: userFound.username,
    });
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "");
  return res.redirect("/login");
};

export const addFavorite = async (req, res) => {
  try {
    const { userId } = req.body;
    const { id: movieId } = req.params;
    const userFound = await User.findById(userId.id);
    if (!userFound) {
      return res.status(400).json({
        message: ["User not found"],
      });
    }
    if (userFound.favoriteMovies.includes(movieId)) {
      return res.status(400).json({
        message: ["Movie already in favorites"],
      });
    }
    userFound.favoriteMovies.push(movieId);
    const userSaved = await userFound.save();
    const jsonFinal = res.json({
      id: userSaved._id,
      username: userSaved.username,
      favoriteMovies: userSaved.favoriteMovies,
    });
    console.log(jsonFinal)
    return jsonFinal

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const viewFavorites = async (req, res) => {
  try {
    const { user } = req.body;
    const userFound = await User.findById(user.id);

      
    return userFound.favoriteMovies

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};