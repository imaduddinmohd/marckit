import React from "react";
import "../output.css";

const Sidebar = ({ open }) => {
  const openSidebarClass = open ? "translate-x-[0%]" : "";

  return (
    <div
      className={`h-screen w-3/4 fixed top-0 left-0 bg-white translate-x-[-100%] ${openSidebarClass} transition-all duration-500`}
    >
      <div className=" h-[130px] bg-slate-700 pt-[70px] pl-5">
        <h1 className="text-white font-normal leading-4">
          Browse
          <span className="block font-semibold text-lg">Amazon</span>
        </h1>
      </div>

      <nav className="pl-5">
        <ul className="flex flex-col">
          <li>
            <div>
              <h1 className="text-black font-bold py-2">Amazon Home</h1>
            </div>
          </li>

          <li>
            <div>
              <h1 className="text-black font-bold border-t-2 py-2 border-slate-500">
                Trending
              </h1>
              <ul>
                <li className="text-sm mb-2">Best Seller</li>
                <li className="text-sm mb-2">New Releases</li>
                <li className="text-sm mb-2">Movers and Shakers</li>
              </ul>
            </div>
          </li>

          <li>
            <div>
              <h1 className="text-black font-bold py-2 border-t-2 border-slate-500">
                Top Categories For You
              </h1>
              <ul>
                <li className="text-sm mb-2">Mobiles</li>
                <li className="text-sm mb-2">Computers</li>
                <li className="text-sm mb-2">Books</li>
                <li className="text-sm mb-2">Amazon Fashion</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
