import { useState } from "react";

const MovieList = function(props){
    const [visibility, setVisibility] = useState("hidden");
    const [ flag, setFlag] = useState(true);
    function showImg(){
        return setFlag(!flag);
      }
    return (
        <div className="movie-grid">
        {props.movie.map((list)=>(
            <div >
                <img onClick={showImg} src={list.Poster} alt={list.Title} />
                <div className={flag? visibility : "visible"}>
                <div >Title: {list.Title}</div>
                <div>Released in: {list.Year}</div>
                </div>
               
            </div>
        ))}
        </div>
    )
}
export default MovieList;