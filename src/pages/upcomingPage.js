import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api";

const UpcomingMovieListPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
      />
  );
};

export default UpcomingMovieListPage;