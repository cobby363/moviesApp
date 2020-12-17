# Assignment 1 - ReactJS app.

Name: Cathal O'Brien

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - Watchlist - when the user selects 'add to watchlist' in the upcoming page, the movie will now be displayed in this page.
 + Feature 2 - Now Playing page - if the user is curious as to which movies are currently playing around them, they may click on this page via the link at the top of the paage to see a list of these movies.
 + Feature 3 = Popular Page - If a user would like to be inspired for current movies that are popular, they can go to the popular movies tab and look for inspiration there.
 + Feature 4 - Top Rated Page - If a user wishes to see what movies have been given th beat rating to see what may be a good watch, they can go to Top Rated via toip of the page link and view the top 20.
 + Show Cast - within any movie details, you can view the cast of the movie, a picture, character name, actor name and a hyperlink to their profile.
 + User can remove a movie from their watchlist

## Setup requirements (If required).

none other than standard

## API Data Model.

 - `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` - get the top rated movies in tmdb history
 
 - `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` - get the most popular movies at the moment
 
 - `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US` - get  the cast list (credits) of the movie


- `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` - get what movies are currently playing

- `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` - get futuree upcoming movies

- `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}` - retrieve the movie reviews
 
 
- "https://api.themoviedb.org/3/genre/movie/list?api_key="process.env.REACT_APP_TMDB_KEY +"&language=en-US" - get the movie genres
      
      
 - `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}` - get the movie's id 
  
  
- `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1` - get movies
 
 
## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

homepage.png
This is my homepage that I have used in my webapp. It shows a list of current films with the ability to add to favourites. If you click on the image you can view some of the details about the movie

details.png
