import React, { createContext, useContext, useState } from 'react';
import { addFavorite, viewFavorites } from "../nodeApp/auth.js";
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    
    const addFavoriteMovie = async (user, movie) => {
      try {
        await addFavorite(user, movie);
      } catch (error) {
        console.error("Error in signup:", error);
      }
    };

    const viewFavoritesMovie = async (user) =>{
      console.log(user)
      try {
        await viewFavorites(user)
      } catch (error) {
        console.error("Error in signup:", error);
      }
      
    }

    return (
      <MovieContext.Provider value={{ favoriteMovies, addFavoriteMovie, viewFavoritesMovie }}>
        {children}
      </MovieContext.Provider>
    );
  };
  