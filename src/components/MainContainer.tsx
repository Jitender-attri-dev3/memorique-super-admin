import React from "react";
import { FcHome } from "react-icons/fc";
import { FcParallelTasks } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { Outlet } from "react-router";

const MainContainer = () => {
  return (
    <div className="flex h-screen">
      <div className="p-2">
        <div className="flex items-center h-[100%] flex-col justify-center gap-2">
          <button className="p-2 rounded-2xl flex items-center gap-2">
            <FcHome className="text-2xl" />
            Home
          </button>
          <button className="p-2 rounded-2xl">
            <FcParallelTasks className="text-2xl" />
          </button>
          <button className="p-2 rounded-2xl">
            <FcServices className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
