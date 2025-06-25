import React, { useState } from "react";
import Layout from "./../Layout/Layout";
import Filters from "../Components/Filters";
import { Movies } from "../Data/MovieData";
import Movie from "../Components/Movie";
import { CgSpinner } from "react-icons/cg";
const MoviePage = () => {
  const maxPage = 6;
  const [page, setpage] = useState(maxPage);
  const HanleLoadingMore = () => {
    setpage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="min-height-screen container mx-auto px-2 my-6">
          Total{" "}
          <span className=" font-bold text-subMain ">
            {Movies.length}
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6 ">
              {Movies.slice(0, page).map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
          </span>
        </p>
      </div>
      {/* loadmore */}
      <div className="w-full flex-colo md:my-20 my-10">
        <button
          onClick={HanleLoadingMore}
          className="flex-rows gap-3 -mt-20 capitalize text-white py-3 px-8 font-semibold border-2 border-subMain"
        >
          load more <CgSpinner className="animate-spin" />
        </button>
      </div>
    </Layout>
  );
};

export default MoviePage;
