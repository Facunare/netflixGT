import React, { useEffect, useRef } from "react";
import useFetch from "../custom_hooks/useFetch";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

function Home() {
  const [trendingMovies, fetchMovies] = useFetch();
  const [movies, fetchNext] = useFetch();
  const trendCardMovieRef = useRef(null);
  const nextCardMovieRef = useRef(null);

  useEffect(() => {
    trending();
    allMovies();
  }, []);

  const trending = () => {
    fetchMovies(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596"
    );
  };

  const allMovies = () => {
    fetchNext(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596"
    );
  };

  let isTrendDragging = false;
  let trendStartX = 0;
  let trendScrollLeft = 0;

  const handleTrendMouseDown = (e) => {
    isTrendDragging = true;
    trendStartX = e.pageX - trendCardMovieRef.current.offsetLeft;
    trendScrollLeft = trendCardMovieRef.current.scrollLeft;
  };

  const handleTrendMouseUp = () => {
    isTrendDragging = false;
  };

  const handleTrendMouseMove = (e) => {
    if (!isTrendDragging) return;
    const x = e.pageX - trendCardMovieRef.current.offsetLeft;
    const walk = (x - trendStartX) * 2;
    trendCardMovieRef.current.scrollLeft = trendScrollLeft - walk;
  };

  let isNextDragging = false;
  let nextStartX = 0;
  let nextScrollLeft = 0;

  const handleNextMouseDown = (e) => {
    isNextDragging = true;
    nextStartX = e.pageX - nextCardMovieRef.current.offsetLeft;
    nextScrollLeft = nextCardMovieRef.current.scrollLeft;
  };

  const handleNextMouseUp = () => {
    isNextDragging = false;
  };

  const handleNextMouseMove = (e) => {
    if (!isNextDragging) return;
    const x = e.pageX - nextCardMovieRef.current.offsetLeft;
    const walk = (x - nextStartX) * 2;
    nextCardMovieRef.current.scrollLeft = nextScrollLeft - walk;
  };

  return (
    <div>
      <NavBar />
      <main className="home_main">
        <div className="homeTitle">
          <h1>Bienvenidos</h1>
          <p>
            Millones de películas, programas de televisión y personas por
            descubrir. <br /> Explora ahora.
          </p>
        </div>
      </main>
      <h1 className="trendTitle">Tendencia</h1>
      <section
        className="trend_section"
        ref={trendCardMovieRef}
        onMouseDown={handleTrendMouseDown}
        onMouseUp={handleTrendMouseUp}
        onMouseMove={handleTrendMouseMove}
        onMouseLeave={handleTrendMouseUp}
      >
        <div className="cardMovie">
          {trendingMovies.map((movie) => (
            <MovieCard movie={movie} id={movie.id} key={movie.id} />
          ))}
        </div>
      </section>
      <h1 className="trendTitle">Proximamente</h1>
      <section
        className="next_section"
        ref={nextCardMovieRef}
        onMouseDown={handleNextMouseDown}
        onMouseUp={handleNextMouseUp}
        onMouseMove={handleNextMouseMove}
        onMouseLeave={handleNextMouseUp}
      >
        <div className="cardMovie">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} id={movie.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
