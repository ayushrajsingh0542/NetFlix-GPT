import {  useSelector } from "react-redux";
import useMovieTrailer from "./hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
    
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);//subscribing to movie trailer
  //fetch trailer and updating the store with trailer video data
 useMovieTrailer(movieId);

  
  return (
    <div className="w-screen">
      <iframe
  className=" w-screen aspect-video"
  src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
/>

    </div>
  );
}

export default VideoBackground;
