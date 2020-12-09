import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMovieListPage from './pages/upcomingPage';
import MoviesContextProvider from "./contexts/movieContext";
import GenresContextProvider from "./contexts/genreContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import nowPlayingMovies from "./pages/nowPlaying";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider>
          <GenresContextProvider>    
          <Switch>    
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/now_playing" component={nowPlayingMovies} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Route path="/movies/upcoming" component={UpcomingMovieListPage} />
          <Redirect from="*" to="/" />
          </Switch>
            </GenresContextProvider>   
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));