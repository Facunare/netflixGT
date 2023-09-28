import React, { useEffect, useState } from 'react';
import NavBar from "../components/NavBar";
import { useAuth } from '../nodeApp/AuthContext';
import axios from 'axios';
function Favoritos() {
  
  const [favoritos, setFavoritos] = useState([])
  
  const {user} = useAuth()
 useEffect(() => {
    axios.get('/api/favoritos')
      .then((response) => {
        if (!response.data.favoriteMovies) {
          console.error('No se encontraron favoritos');
          return;
        }
        setFavoritos(response.data.favoriteMovies);
      })
      .catch((error) => {
        console.error('Error al obtener los favoritos:', error);
      });
  }, []);


  return(
    <>
    <NavBar />
      <div className="favoritos-container">
        {/* {user ? (
          <div>
            <h2>Bienvenido, {user.name}!</h2>
            <h3>Tus favoritos:</h3>
            <ul>
              {favoritos.map((favorite, index) => (
                <li key={index}>{favorite}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Usuario no autenticado.</p>
        )} */}
      </div>
    </>
  );
}

export default Favoritos;