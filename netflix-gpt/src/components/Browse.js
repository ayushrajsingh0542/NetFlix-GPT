import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


function Browse() {
  
   useNowPlayingMovies();//updating the store
   usePopularMovies();
   useTopRatedMovies();
   
    return ( 
        <div>
           <Header/ >
           <MainContainer />
           <SecondaryContainer />
        </div>
     );
}

export default Browse;