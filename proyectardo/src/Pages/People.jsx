import { useEffect, useState } from "react"
import useFetch from "../custom_hooks/useFetch"
import Pagination from "../components/Pagination"
import '../App.css'
import NavBar from "../components/NavBar"

const People = ()=>{
    const [search, setSearch] = useState('')
  
    const [people, fetchPeople] = useFetch([])
     const [page, setPage] = useState(1)

    useEffect(()=>{
        allPeople()
    }, [])

    const allPeople = ()=>{
        fetchPeople(`https://api.themoviedb.org/3/person/popular?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596&page=${page}`)
    }

    
  const searchPeople = (e)=>{
    e.preventDefault()
    fetchPeople(`https://api.themoviedb.org/3/search/person?api_key=dd4bd1e62fd7bef02e9f3da5f0b10596&query=${search}`)    
  
  }


    return (
        <div>
            <NavBar searchMovies={searchPeople} setSearch={setSearch}/>
            <h1 className="peopleTitle">Personas populares</h1>
            <div className="people">

                {people.map(person=>(
                    <a className="peopleCard" href={`person/${person.id}`}>
                        {person.profile_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
                        />
                        ) : (
                        <img className="fondoGris"
                            src="../public/fondo-gris-claro-liso-liso_8087-1195.avif"
                        />
                        )}

                        <div className="peopleData">
                            <p>{person.name}</p>
                            <p>Popularity: {person.popularity}</p>
                        </div>
                    </a>
                ))}
            </div>
            <Pagination page={page} setPage={setPage}/>
        </div>
    ) 

}


export default People