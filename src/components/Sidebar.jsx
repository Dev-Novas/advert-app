import React from "react";
import K from "../constants";
import { Link, NavLink } from "react-router";
import { LogOutIcon } from "lucide-react";
import eg1 from "../assets/photos/eg1.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-blue-300 h-screen px-2 py-4 fixed left-0 top-0">
      <span>
        <img src={eg1} alt="" className="w-50 h-auto drop-shadow-md" />
      </span>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              // className="text-white hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center"
              className={({ isActive }) =>
                `text-gray-700 hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex items-center gap-x-2 ${
                  isActive ? "bg-white text-black font-bold shadow-md" : ""
                }`
              }
              title={link.name}
              end
            >
              <link.icon className="text-[#2563eb]" />
              <span> {link.name}</span>
            </NavLink>
          );
        })}
      </div>
      <Link
        className="flex gap-2 mt-auto hover:bg-white hover:text-black px-3 py-2 w-full rounded-md items-center gap-x-2"
        to={"/"}
      >
        <LogOutIcon className="text-[#2563eb]" />
        <button className="mt-auto ">Logout</button>
      </Link>
    </div>
  );
};

export default Sidebar;
