import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/movieContext'
import AddToWatchListButton from '../components/buttons/addToWatchlist'

const NowPlaying = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowPlaying.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Movies now Playing"
      movies={movies} 
      action={(nowPlaying) => {
        return <AddToWatchListButton movie={nowPlaying} />;
      }}
    />
  );
};

export default NowPlaying;