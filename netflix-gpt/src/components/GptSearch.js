import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG_URL } from "../utils/constants";

function GptSearch() {
    


   
    return (  
        <div>
            <div className="fixed -z-10 ">
            <img
          src={BG_IMG_URL}
          alt="bg-img"
        />
        </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
     );
}

export default GptSearch;