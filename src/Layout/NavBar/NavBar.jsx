import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

const NavBar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      <div className=" bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between">
          {/* logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <div className="w-full h-12 object-contain  mt-2 text-2xl ">
                ALX Stream
              </div>{" "}
            </Link>
          </div>
          {/* search form */}
          <div className="col-span-3 ">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4  ">
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white "
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search for movies..."
                className=" font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent  px-2 border-none text-black"
              />
            </form>
          </div>
          {/* menu */}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14  2xl:gap-20 justify-between lg:flex xl:justify-end items-center ">
            <NavLink to="/Movis" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/Anime" className={Hover}>
              Anime
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <FaUser className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
