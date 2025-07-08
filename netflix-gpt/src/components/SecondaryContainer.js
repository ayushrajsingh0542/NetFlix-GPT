import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
    const movies=useSelector((store)=>store.movies)
    return ( 
        <div className="bg-black">
            <div className="mt-0 md:-mt-80 relative z-20 pl-4 md:pl-12">
            <MovieList title={""} movies_={movies?.nowPlayingMovies}/>
         
            <MovieList title={"Top Rated Movies"} movies_={movies?.topRatedMovies}/>
            <MovieList title={"Popular"} movies_={movies?.popularMovies}/>
            <MovieList title={"Upcoming"} movies_={movies?.upcomingMovies}/>
             <MovieList title={"Trending near you"} movies_={movies?.nowPlayingMovies}/>
            <MovieList title={"Horror"} movies_={movies?.nowPlayingMovies}/>
            </div>
        </div>
     );
}
export default SecondaryContainer;