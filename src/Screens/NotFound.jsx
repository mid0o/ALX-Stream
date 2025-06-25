import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex-colo w-full min-h-screen gap-8 text-white bg-main lg:py-20 py-10 px-6">
      <img
        src="../Images/404.svg"
        className="w-full h-96 object-contain"
        alt="NotFound"
      />
      <h1 className="lg:text-4xl font-bold"> Page Not Found</h1>
      <p className="font-medium text-border italic leading-6">
        The page you are looking for does not exist. You may have mistyped the
        URL
      </p>
      <Link
        to="/"
        className="bg-subMain flex-rows gap-2 text-white font-medium py-3 px-4 hover:text-main transitions rounded-md"
      >
        <FaHome /> Home
      </Link>
    </div>
  );
};

export default NotFound;
