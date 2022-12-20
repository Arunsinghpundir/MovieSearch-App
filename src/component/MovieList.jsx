import { useState } from "react";

const MovieList = function(props){
    const [visibility, setVisibility] = useState("hidden");
    const [ flag, setFlag] = useState(true);
    function showImg(){
        return setFlag(!flag);
      }
    return (
        <div className="movie-grid" >
        {props.movie.map((movie)=>(
            <div className="imgBox">
                <img onClick={showImg} src={movie.Poster} alt={movie.Title} />
            <div className={flag? visibility : "visible"}>
                <div >Title: {movie.Title}</div>
                <div>Released in: {movie.Year}</div>
                <button onClick={()=>props.handleFavMovie(movie)}>{props.name}</button>
            </div>
            </div>
        ))}
        </div>
    )
}
export default MovieList;