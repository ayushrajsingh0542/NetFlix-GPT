import { useRef } from "react";
import client from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

function GptSearchBar() {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleClick = async () => {
    console.log(searchText.current.value);
    //make api call to openai to get movies

    const getQuery =
      "Act as a Movie Recommendation System for the query " +
      searchText.current.value +
      " .Directly give the names of 5 movies and no explanation in the comma separated format given ahead. Example Result : Iron-Man,Sholay,War,RRR,Gadar";

    const getResults = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: getQuery }],
    });
    //console.log(getResults.choices[0]?.message?.content);
    const gptMovies = getResults.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); //we get the array of "promises"
    const tmdbResults = await Promise.all(promiseArray); //this function will finish when all the promises in the array are resolved
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    return jsonData.results;
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="get recommendations"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 rounded-lg col-span-3"
          onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
