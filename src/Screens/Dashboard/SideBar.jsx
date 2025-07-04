import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Layout from "../../Layout/Layout";
import { NavLink } from "react-router-dom";

function SideBar({ children }) {
  const SideLinks = [
    {
      name: "Dashboard",
      Link: "/dashboard",
      icon: BsFillGridFill,
    },
    {
      name: "Update Profile",
      Link: "/profile",
      icon: IoSettings,
    },
  ];
  const active = "bg-dryGray text-subMain";
  const hover = "hover:text-white hover:bg-main";
  const inActive =
    "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;

  return (
    <Layout>
      <div className="min-h-screen container mx-auto px-2">
        <div className="xl:grid  grid-cols-8 gap-10 items-start md:py-12 py-6">
          <div className="col-span-2 sticky bg-dry border  border-gray-800 p-6 rounded-md xl:mb-0 mb-5">
            {SideLinks.map((link, index) => (
              <NavLink to={link.Link} key={index} className={Hover}>
                <link.icon /> <p>{link.name}</p>
              </NavLink>
            ))}
          </div>
          <div className=" col-span-6 rounded-md bg-dry border border-gray-800 p-6">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SideBar;
