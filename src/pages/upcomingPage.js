import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/movieContext'
import AddToWatchListButton from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  
    return !("watchlist" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}  
      action={(upcoming) => {
        return <AddToWatchListButton movie={upcoming} />;
      }}
    />
  );
};

export default MovieListPage;