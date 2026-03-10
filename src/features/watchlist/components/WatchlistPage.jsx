import React, { useContext, useState, useEffect } from "react";
import genreids from "../../../utils/Helpers/GenereIDMappings";
import MoviRecommendations from "./MoviRecommendations";
import MovieFilters from '../../movies/components/MovieFilters';
import SearchWatchlistMovies from "./SearchWatchlistMovies";
import WatchlistTable from "./WatchlistTable";
import WatchlistEmptyState from "./WatchlistEmptyState";
import { watchListContext } from "../../../context/MovieContextWrapper";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

function WatchlistPage() {
  
  
  //All the States
  const [currGenere, setCurrGenere] = useState("All Genre");
  const [genreList, setGenereList] = useState(["All Genre"]);
  const [search, setSearch] = useState("");
  const [showModel, setShowModel] = useState(false);
  const watchListData = useContext(watchListContext);

  // set page title for SEO
  useEffect(() => {
    document.title = "My Watchlist | TMDB App";
  }, []);

  

  useEffect(() => {
  
    const genreListData = watchListData.watchList.reduce((set, movie) => {
      movie?.genre_ids.forEach((id) => set.add(genreids[id]));
      return set;
    }, new Set());
    setGenereList(["All Genre", ...genreListData]);
  }, [watchListData.watchList]);

  //Sorting Ascending
  const handleAscendingSortRatings = () => {
    const sortedMovies = watchListData.watchList.sort(
      (A, B) => A?.vote_average - B?.vote_average,
    );
    watchListData.setWatchList([...sortedMovies]);
  };

  //Sorting Descending
  const handleDecendingSortRatings = () => {
    const sortedMovies = watchListData.watchList.sort(
      (A, B) => B?.vote_average - A?.vote_average,
    );
    watchListData.setWatchList([...sortedMovies]);
  };

  

  
  return (
    <>
    {

      watchListData.watchList.length > 0 ? (
        <main className="mx-5 my-10 px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">My Watchlist</h1>
          <button
            className="mx-auto block bg-blue-400 hover:bg-blue-500 transition duration-300 h-12 sm:h-14 w-40 sm:w-60 text-white font-bold border border-blue-700 rounded-xl shadow-md cursor-pointer my-4"
            onClick={() => setShowModel((prevState) => !prevState)}
          >
            Recommend Movies
          </button>
          {showModel && (
            <MoviRecommendations
              watchList={watchListData.watchList}
              setShowModal={setShowModel}
            />
          )}
          <MovieFilters
            genreList={genreList}
            currGenere={currGenere}
            setCurrGenere={setCurrGenere}
          />
          <SearchWatchlistMovies setSearch={setSearch} />
          <WatchlistTable
            currGenere={currGenere}
            watchList={watchListData.watchList}
            handleAscendingSortRatings={handleAscendingSortRatings}
            handleDecendingSortRatings={handleDecendingSortRatings}
            search={search}
            removeMovie={watchListData.removeFromWatchList}
          />
        </main>
      ) : (
        <WatchlistEmptyState />
      )}
    
    </>
  );
}

export default WatchlistPage;


