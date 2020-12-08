import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPlayingNow } from "../api/tmdb-api";

const PlayingNowPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPlayingNow().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
      <PageTemplate
        title='Now Playing!'
        movies={movies}
      />
  );
};

export default PlayingNowPage;