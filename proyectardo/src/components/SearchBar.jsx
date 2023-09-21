
import { Link } from 'react-router-dom';
const SearchBar = ({setSearch, searchMovies, page}) =>{


    return (
        <form action="" onSubmit={searchMovies}>
            
            <input type="text" onChange={(e)=>setSearch(e.target.value)} />
            <button>
                Buscar
            </button>
        </form>
    )
}

export default SearchBar