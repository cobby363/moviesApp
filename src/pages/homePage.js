import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { MoviesContext } from "../contexts/movieContext";
import AddToFavoritesButton from '../components/buttons/addToFavourites'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
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