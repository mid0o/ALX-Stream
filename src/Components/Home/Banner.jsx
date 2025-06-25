import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import FlexMovies from "../FlexMovies";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 w-full flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
              <h1 className=" xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {movie.name}
              </h1>
              <div className="flex gap-5 items-center text-dryGray ">
                <FlexMovies movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/Movis/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs "
                >
                  watch now
                </Link>
                <button className="bg-white hover:text-subMain transitions rounded text-white px-4 py-3 text-sm bg-opacity-30 ">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
