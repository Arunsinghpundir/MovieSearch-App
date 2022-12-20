
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react';
import MovieList from './component/MovieList';
import { MovieHeading } from './component/MovieHeading';
import { SearchBox } from './component/SearchBox';

function App() {
  const [movie,setMovies] = useState([]);
  const [search, setSearch] = useState("don");
  const [favourite,setfavourite] = useState([]);

  const getMovieRequest = async (search)=>{
    const url = `https://www.omdbapi.com/?s=${search}&apikey=e43ec240`;
    const api = await fetch(url);
    const response = await api.json();
    if( response.Search){
    setMovies(response.Search);
    }
  }
  useEffect (()=>{
    getMovieRequest(search);
  },[search])

  const addFavMovie = (movie)=>{
    if(!favourite.includes(movie)){
      const newFavMovie = [...favourite, movie];
      setfavourite(newFavMovie);
    }

  }
  const removeFavMovie = (movie)=>{
    const newFavMovie = favourite.filter((favourite)=>favourite.imdbID !== movie.imdbID);
    setfavourite(newFavMovie);
  };

  return (
    <div className="App">
     <MovieHeading class="MovHead" heading="Movies"></MovieHeading>
      <SearchBox search={search} setSearch={setSearch}/>
     <MovieList  name="❤️" handleFavMovie={addFavMovie} movie={movie}/> 

     <MovieHeading  class="FavHead" heading="Favourite Movies"></MovieHeading>
     <MovieList name="👎" handleFavMovie={removeFavMovie} movie={favourite}/> 
    </div>
  );
}

export default App;
