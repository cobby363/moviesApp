import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/movieContext'
import AddToWatchListButton from '../components/buttons/addToWatchlist'

const PopularPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}  
      action={(popular) => {
        return <AddToWatchListButton movie={popular} />;
      }}
    />
  );
};

export default PopularPage;