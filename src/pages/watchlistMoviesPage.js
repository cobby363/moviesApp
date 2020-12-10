import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/movieContext'

const AddToWatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.movies.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"WatchList"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default AddToWatchListPage;
