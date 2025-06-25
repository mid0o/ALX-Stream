import React from "react";
import Titles from "../Titles";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import Movie from "../Movie";
import { Movies } from "../../Data/MovieData";
const PopularMovies = () => {
  return (
    <div className="my-16">
      <Titles title="PopularMovies" Icon={BsFillCollectionPlayFill} />
      <div className=" grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {Movies.slice(0, 8).map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
