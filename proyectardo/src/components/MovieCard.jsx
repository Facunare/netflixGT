import '../App.css' 

const MovieCard = ({movie, id}) =>{
    return (

        <a href={`/movie/${id}`} className='card-movie'>

            {movie.poster_path ? (
            <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
            />
            ) : (
            <img
                src="../public/fondo-gris-claro-liso-liso_8087-1195.avif"
            />
            )}

            
            <p className="title" key={movie.id}>{movie.title}</p>
            <p className="date">{movie.release_date}</p>
            <p className='vote_average'>{movie.vote_average.toFixed(1)}</p>
            
        </a>
    )
}           
export default MovieCard