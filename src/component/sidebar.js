import React from 'react';
import { NavLink } from 'react-router-dom'; 
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSlack } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className=" bg-gray-800 text-white w-64 space-y-6 py-7 px-2" style={{height:"65rem"}}>
      <h1 className="text-3xl font-semibold text-center flex gap-3 items-center"> <AiOutlineSlack /> Park Sync</h1>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2.5 px-4 rounded bg-gray-700"
              : "flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          }
        >

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
          </svg>

          Dashboard
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2.5 px-4 rounded bg-gray-700"
              : "flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          }
        >
          <FaMapMarkerAlt className="mr-2" />
          Location
        </NavLink>
        <NavLink
          to="/reservation"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2.5 px-4 rounded bg-gray-700"
              : "flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          }
        >
          <FaCalendarAlt className="mr-2" />
          Reservation
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2.5 px-4 rounded bg-gray-700"
              : "flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          }
        >
          <FaUsers className="mr-2" />
          Users
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;
