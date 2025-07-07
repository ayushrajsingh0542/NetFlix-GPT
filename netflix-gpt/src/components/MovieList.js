import MovieCard from "./MovieCard";

function MovieList({title,movies_}) {
    console.log(movies_)
    return ( 
        <div className="px-6 ">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                
                <div className="flex">
                    {movies_?.map((movie)=><MovieCard key={movie.id} poster_path={movie?.poster_path}/>)}
                    
                </div>
            </div>
            
            
        </div>
     );
}

export default MovieList;