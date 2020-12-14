import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/movieContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchList}
    >
      Add to WatchList
    </button>
  );
};

export default AddToWatchListButton;