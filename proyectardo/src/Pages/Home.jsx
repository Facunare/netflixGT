
import { useEffect } from "react"
import useFetch from "../custom_hooks/useFetch"
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar"
import SearchBar from "../components/SearchBar"
function Home () {

    const [trendingMovies, fetchMovies] = useFetch()
    const [movies, fetchNext] = useFetch()
    useEffect(()=>{
        trending()
        allMovies()
    })

    const trending = () =>{
        fetchMovies('https://api.themoviedb.org/3/trending/movie/day?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596')
    }
    const allMovies = ()=>{
    
        fetchNext(`https://api.themoviedb.org/3/movie/upcoming?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596`)
      }

      const draggable = document.querySelector('.cardMovie');

        let offsetX, offsetY, isDragging = false;

        draggable.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - draggable.getBoundingClientRect().left;
            offsetY = e.clientY - draggable.getBoundingClientRect().top;
            draggable.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;

            draggable.style.left = x + 'px';
            draggable.style.top = y + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            draggable.style.cursor = 'grab';
        });

    return(
        <div>
            <NavBar/>
            <main className="home_main">
                <div className="homeTitle">
                    <h1>Bienvenidos</h1>
                    <p>Millones de películas, programas de televisión y personas por descubrir. <br /> Explora ahora.</p>
                </div>
            </main>
            <h1 className="trendTitle">Tendencia</h1>
            <section className="trend_section">
                <div className="cardMovie">
                    {trendingMovies.map(movie=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            </section>
            <h1 className="trendTitle">Proximamente</h1>
            <section className="trend_section">
                <div className="cardMovie">
                    {movies.map(movie=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            </section>
      
        </div>
    )
}

export default Home