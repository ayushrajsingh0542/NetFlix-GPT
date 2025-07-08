import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { addPopularMovies } from "../../utils/moviesSlice";

const usePopularMovies=()=>{

const dispatch=useDispatch();

const popularMovies=useSelector((store)=>store.movies.popularMovies);//memoisation-if we already some data here..do not make unnecessary api calls

   const getPopularMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);

      const jsonData=await data.json();
      console.log(jsonData.results);
      dispatch(addPopularMovies(jsonData.results));
   }

   useEffect(()=>{
      if(!popularMovies)
      getPopularMovies();
   },[])
};

export default usePopularMovies;