
import SearchBar from './SearchBar'

const NavBar = ({searchMovies, setSearch})=>{
    return (
        <header>
          <div className='logo_list'>

            <a href="/"><img src="/kindpng_571833.png" alt="logo - MovieDB" /></a>

            <ul>
              <li className='header__li'><a className='header__A' href="/popular">Populares</a></li>
              <li className='header__li'><a className='header__A' href="/now">En cartelera</a></li>
              <li className='header__li'><a className='header__A' href="/nextMovies">Proximamente</a></li>
              <li className='header__li'><a className='header__A' href="/personalities">Personas</a></li>
            </ul>
          </div>
          
          <SearchBar setSearch={setSearch} searchMovies={searchMovies}/>
          <div className='autentication'>
          <li className='login_li'><a className='login__A' href="/login">Login</a></li>
          <li className='signup__li'><a className='signup__A' href="/register">Signup</a></li>
          </div>
        </header>
    )
}

export default NavBar