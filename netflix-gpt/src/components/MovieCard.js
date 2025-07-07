import { IMG_CDN_URL } from "../utils/constants";

function MovieCard({poster_path}) {
    return ( 
        <div className="w-40 pr-4">
            <img alt="movie-card" src={IMG_CDN_URL+poster_path} />
        </div>
     );
}

export default MovieCard;