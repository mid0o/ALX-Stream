import React from "react";
import SideBar from "../SideBar";
import { FaRegListAlt } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Tables from "../../../Components/Tables";
import { Movies } from "../../../Data/MovieData";

const Dashboard = () => {
  const DashboardDatac = [
    {
      title: "Total Movies",
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      total: 90,
    },

    {
      title: "Total Categories",
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      total: 8,
    },

    { title: "Total Users", bg: "bg-green-600", icon: FaUser, total: 134 },
  ];
  return (
    <SideBar>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardDatac.map((data, index) => (
          <div
            key={index}
            className="p-4 00  rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className="text-xs mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium mt-6">Recent Movies</h3>
      <Tables data={Movies.slice(0, 5)} admin={true} />
    </SideBar>
  );
};

export default Dashboard;
