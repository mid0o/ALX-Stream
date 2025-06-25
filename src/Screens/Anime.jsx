import React from "react";
import Layout from "./../Layout/Layout";
import Filters from "../Components/Filters";
import { Aimes } from "../Data/MovieData";
import Movie from "../Components/Movie";
const Anime = () => {
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="min-height-screen container mx-auto px-2 my-6">
          Total{" "}
          <span className=" font-bold text-subMain ">
            {Aimes.length}
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
              {Aimes.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default Anime;
