import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/moviesSlice";

function useMovieTrailer(movieId) {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData);
    let trailer = jsonData.results.filter((video) => video.type === "Trailer"); //basically had multiple traler so [0]
    const finalTrailer = trailer.length ? trailer[0] : jsonData.results[0]; //if movie does not have trailer
    console.log(finalTrailer);
    dispatch(addTrailerVideo(finalTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;
