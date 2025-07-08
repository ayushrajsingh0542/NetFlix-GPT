import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_IMG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover sm:h-auto sm:object-contain"
          src={BG_IMG_URL}
          alt="bg-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
