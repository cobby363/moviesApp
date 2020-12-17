import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import WatchListMoviesPage from './pages/watchlistMoviesPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingPage";
import MoviesContextProvider from "./contexts/movieContext";
import GenresContextProvider from "./contexts/genreContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import NowPlaying from './pages/nowPlaying'
import PopularPage from './pages/popularPage'
import TopRatedPage from './pages/topRated'
import MovieCastPage from "./pages/movieCastPage"


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
            <Route path="/reviews/:id" component={MovieReviewPage}/>
            <Route path="/movies/:id/full-cast" component={MovieCastPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviePage}/>
            <Route path="/movies/nowPlaying" component={NowPlaying}/>
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
            <Route path = "/movies/popular" component = {PopularPage}/>
            <Route path="/movies/nowPlaying" component={NowPlaying}/>
            <Route path="/movies/topRated" component={TopRatedPage}/>
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider> 
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
  };
  ReactDOM.render(<App/>, document.getElementById("root"));