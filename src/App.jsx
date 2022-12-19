
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react';
import MovieList from './component/MovieList';
import { MovieHeading } from './component/MovieHeading';
import { SearchBox } from './component/SearchBox';

function App() {
  const [movie,setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const getMovieRequest = async (search)=>{
    const url = `http://www.omdbapi.com/?s=${search}&apikey=e43ec240`;
    const api = await fetch(url);
    const response = await api.json();
    if( response.Search){
    setMovies(response.Search);
    }
  }
  useEffect (()=>{
    getMovieRequest(search);
  },[search])
  return (
    <div className="App">
     <MovieHeading heading="Movies"></MovieHeading>
      <SearchBox search={search} setSearch={setSearch}/>
     <MovieList movie={movie}/> 
    </div>
  );
}

export default App;
