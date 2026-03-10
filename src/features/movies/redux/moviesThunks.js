
import { setErr, setLoader, setMovies, stopLoader } from './moviesSlice'
import axios from "axios";


function fetchTrendingMovies(pageNo){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    return async (dispatch) => {
      dispatch(setLoader())  
    //const url = `${BASE_URL}discover/movie?api_key=${API_KEY}&page=${pageNo}`;
      const url = `/.netlify/functions/movies2?page=${pageNo}`;
    axios
      .get(url)
      .then((response) => {
        dispatch(setMovies(response?.data?.results));
      })
      .catch((error) => {
        dispatch(setErr(error));
      })
      .finally(() => {
        dispatch(stopLoader())
        
      });
  }
}



export default fetchTrendingMovies;