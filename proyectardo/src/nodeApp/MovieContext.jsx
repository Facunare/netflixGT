import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    
    const addFavorite = async (userId, movieId) => {
      try {
        await fetch("/api/addFavorite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId,
            movieId: movieId,
          }),
        });
      } catch (error) {
        console.log(error)
      }
    };

    return (
      <MovieContext.Provider value={{ favoriteMovies, addFavorite }}>
        {children}
      </MovieContext.Provider>
    );
  };
  