import React, { useEffect } from "react";
import Pagination from "../../ui/components/Pagination";
import MovieCard from "./MovieCard";
import Spinner from "../../ui/components/Spinner";
import ErrorFallback from "../../ui/components/ErrorFallback";
import { useSelector, useDispatch } from "react-redux";
import fetchTrendingMovies from '../redux/moviesThunks';
import { handleNext, handlePrevious } from "../redux/paginationSlice";


function MoviesPage() {
  
  //State Managemaent Using Redux
  const { movies,err,loader} = useSelector((state)=>state.movie)
  const { pageNo} = useSelector((state)=>state.pagination)

  // Dispatcher  
  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(fetchTrendingMovies(pageNo))
  }, [pageNo,dispatch]);

  // SEO: update document title
  useEffect(() => {
    document.title = "Trending Movies | TMDB App";
  }, []);

 
  // Component
  return (
    <div>
    {loader ? (
        <Spinner />
      ) : (
        err ? (<ErrorFallback err={err}/> )
        :
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-center m-5">
            Trending Movies
          </h1>
          <MovieCard movies={movies} />
          <Pagination
            handlePrev={()=>dispatch(handlePrevious())}
            handleNext={()=>dispatch(handleNext())}
            pageNo={pageNo}
          />
        </div>
      )}
    </div>
  );
}

export default MoviesPage;
