import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../features/sidebar/sidebarSlice";

const Backdrop = ({ open }) => {
  const openSidebarClass = open ? "translate-x-[0%]" : "";

  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 left-0 bg-slate-900 opacity-50 h-screen w-full translate-x-[-100%] ${openSidebarClass}`}
      onClick={() => {
        dispatch(toggle());
      }}
    ></div>
  );
};

export default Backdrop;
