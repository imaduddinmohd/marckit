import React from "react";
import "../output.css";
import { HamburgerIcon } from "../icons";
import { PersonIcon } from "../icons";
import { CartIcon } from "../icons";
import { SearchIcon } from "../icons";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";

//#131921

const Header = () => {
  const { isOpen } = useSelector((store) => store.sidebar);

  return (
    <div className="bg-header  px-2 pb-1 pt-2 md:pt-3 md:px-3 md:pb-0">
      <Backdrop open={isOpen} />
      <Sidebar open={isOpen} />
      <header className="h-10  flex text-white justify-between align-middle md:h-8">
        <div className="flex align-middle justify-between gap-1">
          <HamburgerIcon />
          <img
            className="h-5 object-contain mt-2 md:h-[35px] md:mt-1"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>
        <div className="flex md:flex-1">
          <div className="bg-header overflow-hidden   flex bg-white rounded md:flex-1 md:h-min hidden md:flex md:mx-4">
            <input
              className="h-6 font-thin p-2 text-sm w-full outline-none rounded text-black"
              type="text"
              placeholder="Search on Amazon"
            />
            <SearchIcon />
          </div>

          <nav>
            <ul className="flex align-middle justify-between gap-2">
              <li>
                <div className="flex align-middle">
                  <p className="text-xs mt-1">Sign in</p>
                  <PersonIcon />
                </div>
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="bg-header overflow-hidden   flex bg-white rounded md:flex-1 md:h-min md:hidden">
        <input
          className="h-6 font-thin p-2 text-sm w-full outline-none rounded"
          type="text"
          placeholder="Search on Amazon"
        />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Header;
