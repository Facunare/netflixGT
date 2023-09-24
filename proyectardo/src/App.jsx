import React from 'react';
import './App.css';
import PeliculasPopulares from './Pages/PeliculasPopulares';
import Home from './Pages/Home';
import EnCartelera from './Pages/EnCartelera';
import NextMovies from './Pages/NextMovies';
import People from './Pages/People';
import MovieDetails from './Pages/MovieDetails';
import PeopleDetails from './Pages/PeopleDetails';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './nodeApp/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PeliculasPopulares />} />
          <Route path="/now" element={<EnCartelera />} />
          <Route path="/nextMovies" element={<NextMovies />} />
          <Route path="/personalities" element={<People />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/person/:id" element={<PeopleDetails />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protege estas rutas con ProtectedRoute */}
          <Route
            path="/addFavorite"
            element={
              <ProtectedRoute>
                <People />
              </ProtectedRoute>
            }
          />
          <Route
            path="/comment/:id"
            element={
              <ProtectedRoute>
                <MovieDetails />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;