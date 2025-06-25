import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../Components/Home/Banner";
import TopRated from "../Components/Home/TopRated";
import PopularMovies from "../Components/Home/PopularMovies";
import Promos from "../Components/Home/Promos";

const HomeScreen = () => {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2mb6">
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </div>
    </Layout>
  );
};

export default HomeScreen;
