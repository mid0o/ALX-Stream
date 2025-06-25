import React, { useState } from "react";
import Titles from "../Titles";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Movies } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

function TopRated() {
  const [nexetEl, setNextEl] = useState();
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    " hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsFillBookmarkStarFill} />
      <Swiper
        className="my-16"
        navigation={{ nexetEl, prevEl }}
        slidesPerView={4}
        spaceBetween={40}
        autoplay={true}
        speed={1000}
        loop={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {Movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className=" p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
              <img
                src={movie.titelImage}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                <button className=" w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                  <FaHeart />
                </button>
                <Link
                  to={`/Movie/${movie.name}`}
                  className="font-semibold text-xl trancuted line-clamp-2"
                >
                  {movie.name}
                </Link>
                <div className="flex gap-2 text-star">
                  <Rating value={movie.rate} />{" "}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="w-full px-1 flex-rows gap-6 pt-32">
          <button className={classNames} ref={() => setPrevEl()}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} onClick={() => setNextEl()}>
            <BsCaretRightFill />
          </button>
        </div> */}
      </Swiper>
    </div>
  );
}

export default TopRated;
