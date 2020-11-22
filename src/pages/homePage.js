import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContextProvider} from './contexts/moviesContext'
import AddToFavoritesButton from '../../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(MoviesContextProvider);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;