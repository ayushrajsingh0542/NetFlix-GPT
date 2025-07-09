import { useDispatch,useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

import { toggleGptSearchView } from "../utils/gptSlice";
import { useNavigate,useLocation } from "react-router-dom";


function MovieCard({poster_path,movieId}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const location = useLocation();
   
    if(!poster_path)
        return null;
    return ( 
        <div className="w-[182px] md:w-40 transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:z-20">
  <img
    className="cursor-pointer rounded-lg shadow-lg"
    alt="movie-card"
    src={IMG_CDN_URL + poster_path}
    onClick={()=>{
        if(showGptSearch && location.pathname === "/browse")
        dispatch(toggleGptSearchView());
        
        
    }}
  />
</div>

     );
}

export default MovieCard;