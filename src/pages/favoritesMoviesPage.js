import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContextProvider} from './contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContextProvider);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;