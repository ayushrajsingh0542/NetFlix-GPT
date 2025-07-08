import { useSelector } from "react-redux";
import MovieList from "./MovieList";//re-using this component

function GptMovieSuggestions() {

        const gpt=useSelector((store)=>store.gpt);
        const {movieResults,movieNames}=gpt;
        if(!movieNames)
            return null;
    
    
    return ( 
        <div className="p-4 m-1 mt-4 bg-black text-white bg-opacity-90 ">
            <div>
                {movieNames.map((movieName,index)=><MovieList key={movieName}  title={movieName} movies_={movieResults[index]} />)}
                
            </div>
        </div>
     );
}

export default GptMovieSuggestions;