import React from "react";
import { FaUser } from "react-icons/fa";

const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-10 bg-dry ">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center ">
        <div className=" flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movies Watch Offline. <br />
            Enjoy on Your Mobile
          </h1>
          <p className=" text-text text-sm xl:text-base leading-6 xl:leading-8">
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
          <div className=" flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded-md">
              HD 4K
            </div>
            <div className="flex-rows gap-4  bg-black text-subMain px-6 py-3 rounded-md">
              <FaUser /> 2k
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Images/mobile.png"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
