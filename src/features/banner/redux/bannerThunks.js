import { setErr , setLoader , setTop5Movies , stopLoaderB } from './bannerSlice';
import axios from "axios";

function fetchbannerMovies(){
  const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return async (dispatch) => {
      //const url = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
        const url = "/.netlify/functions/movies";
      dispatch(setLoader());
      try {
        console.log('Fetching from function:', url);
        const response = await axios.get(url);
        console.log('Function response:', response.data);
        let results = response?.data?.results || [];
        console.log('Results from function:', results.length);
        // if serverless endpoint failed or returned nothing, fall back to client-side fetch
        if (results.length === 0) {
          console.log('Falling back to direct TMDB fetch');
          const direct = await axios.get(
            `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
          );
          results = direct?.data?.results || [];
          console.log('Direct results:', results.length);
        }

        const top5movie = results.slice(0, 5);
        console.log('Top 5 movies:', top5movie);
        dispatch(
          setTop5Movies(
            top5movie.map((movie) => {
              let cleaned_Title = movie?.title.replace(/“|”/g, '');
              return {
                title: cleaned_Title,
                bannerImage: `${IMAGE_BASE_URL}${movie?.backdrop_path}`,
              };
            }),
          ),
        );
      } catch (error) {
        console.error('Error in banner thunk:', error);
        dispatch(setErr(error));
      } finally {
        dispatch(stopLoaderB());
      }
  }
}


export default fetchbannerMovies;
