import React from 'react';
import './App.css' 
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import PeliculasPopulares from './Pages/PeliculasPopulares';
import Home from './Pages/Home'
import EnCartelera from './Pages/EnCartelera'
import NextMovies from './Pages/NextMovies'
import People from './Pages/People'
import MovieDetails from './Pages/MovieDetails';
import PeopleDetails from './Pages/PeopleDetails';
import Signup from './Pages/Signup';
function App() {
  
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/popular" element={<PeliculasPopulares/>}/>
          <Route path="/now" element={<EnCartelera/>}></Route>
          <Route path="/nextMovies" element={<NextMovies/>}></Route>
          <Route path='/personalities' element={<People/>}></Route>
          <Route exact path="/movie/:id" element={<MovieDetails/>}></Route>
          <Route exact path="/person/:id" element={<PeopleDetails/>}></Route>
          <Route exact path="/signup/" element={<Signup/>}></Route>
          {/* <Route exact path="/login/" element={<Signup/>}></Route>
          <Route exact path="/add-favorite/" element={<Signup/>}></Route> */}
        </Routes>
      </Router>
  );
}

export default App;
