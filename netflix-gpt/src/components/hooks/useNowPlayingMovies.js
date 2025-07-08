import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies=()=>{

const dispatch=useDispatch();

const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);//memoisation-if we already some data here..do not make unnecessary api calls

   const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

      const jsonData=await data.json();
      console.log(jsonData.results);
      dispatch(addNowPlayingMovies(jsonData.results));
   }

   useEffect(()=>{
      if(!nowPlayingMovies)//not there then only make api calls
      getNowPlayingMovies();
   },[])
};

export default useNowPlayingMovies;