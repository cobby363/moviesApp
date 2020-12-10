import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { MoviesContext } from "../contexts/movieContext";
import AddToFavoritesButton from '../components/buttons/addToFavourites'

const UpcomingMovies = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
       action={(upcoming) => {
         return <AddToFavoritesButton movie={upcoming} />;
       }}
    />
  );
};

export default UpcomingMovies;