import { useParams } from "react-router-dom";
import VideoBackground from "./VideoBackground";
import Header from "./Header";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

function EachMovieTrailer() {
  const { movieTrailer } = useParams();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      <div>
        {showGptSearch ? (
          <GptSearch/>
        ) : (
          <VideoBackground movieId={movieTrailer} />
        )}
      </div>
    </div>
  );
}

export default EachMovieTrailer;
