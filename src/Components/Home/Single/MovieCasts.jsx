import React from "react";
import Titles from "../../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaUserFriends } from "react-icons/fa";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { UserData } from "../../../Data/MovieData";

const MovieCasts = () => {
  return (
    <div className="mt-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },

            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {UserData.map((user, i) => (
            <SwiperSlide key={i}>
              <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800 ">
                <img
                  src={`../${user.image}`}
                  alt={user.name}
                  className="w-full h-64 object-cover rounded mb-2"
                />
                <p>{user.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieCasts;
