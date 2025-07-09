import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";

function MovieList({ title, movies_ }) {
     const dispatch=useDispatch();
  return (
    <div className="px-6">
      <h1 className="sm:text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex space-x-3" >
          {movies_?.map((movie) => (
            <Link key={movie.id} to={`/browse/${movie.id}`}>
              <MovieCard
                movieId={movie.id}
                poster_path={movie?.poster_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
