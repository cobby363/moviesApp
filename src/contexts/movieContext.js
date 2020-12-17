import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPlayingNow, getPopular, getTopRated } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowPlaying: [...state.nowPlaying],
      };
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        nowPlaying: [...state.nowPlaying],
        topRated: [...state.topRated],
      };
      case "remove-watchlist":
            return {
                upcoming: state.upcoming.map((m) =>
                    m.id === action.payload.movie.id ? { ...m, watchlist: false } : m
                ),
                movies: [...state.movies],
        nowPlaying: [...state.nowPlaying],
        topRated: [...state.topRated],
      };

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] , nowPlaying: [...state.nowPlaying], popular: [...state.popular], topRated: [...state.topRated] };
    case "load-upcoming":
      return { upcoming: action.payload.upcoming, movies: [...state.movies], nowPlaying: [...state.nowPlaying], popular: [...state.popular], topRated: [...state.topRated] };
    case "load-nowPlaying":
      return { nowPlaying: action.payload.nowPlaying, movies: [...state.movies] , upcoming: [...state.upcoming], popular: [...state.popular], topRated: [...state.topRated] };
    case "load-popular":
      return { popular: action.payload.movies, movies: [...state.movies] , upcoming: [...state.upcoming], nowPlaying: [...state.nowPlaying], topRated: [...state.topRated] };
    case "load-topRated":
      return { topRated: action.payload.movies, movies: [...state.movies] , upcoming: [...state.upcoming], nowPlaying: [...state.nowPlaying], popular: [...state.popular] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};


const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], nowPlaying: [], popular: [], topRated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index]}});
  };

  const removeFromWatchlist = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-watchlist", payload: { movie: state.upcoming[index] } })
};

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  useEffect(() => {
    getPlayingNow().then((nowPlaying) => {
      dispatch({ type: "load-nowPlaying", payload: { nowPlaying } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopular().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((movies) => {
      dispatch({ type: "load-topRated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        nowPlaying: state.nowPlaying,
        popular: state.popular,
        topRated:state.topRated,
        addToWatchList :addToWatchList,
        addToFavorites: addToFavorites,
        addReview: addReview,
        removeFromWatchlist: removeFromWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;