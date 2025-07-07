import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
    const movies=useSelector((store)=>store.movies)
    return ( 
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
            <MovieList title={"Now Playing"} movies_={movies?.nowPlayingMovies}/>
            <MovieList title={"Trending near you"} movies_={movies?.nowPlayingMovies}/>
            <MovieList title={"Top Rated Movies"} movies_={movies?.topRatedMovies}/>
            <MovieList title={"Popular"} movies_={movies?.popularMovies}/>
            <MovieList title={"Upcoming"} movies_={movies?.nowPlayingMovies}/>
            <MovieList title={"Horro"} movies_={movies?.nowPlayingMovies}/>
            </div>
        </div>
     );
}

export default SecondaryContainer;