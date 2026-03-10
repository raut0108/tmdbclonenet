import React from 'react';
import Banner from '../features/banner/components/Banner';
import MoviesPage from '../features/movies/components/MoviesPage';

const HomePage = () => {
  React.useEffect(() => {
    document.title = "Home | TMDB App";
  }, []);

  return (
    <main>
      <Banner />
      <MoviesPage />
    </main>
  );
};

export default HomePage;
