import React from "react";
import logo from "../assets/The_New_York_Times_logo.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="flex flex-row lg:justify-between border-b-2 relative items-center container">
      <div className=" p-4 xl:ml-3 ml-48 cursor-pointer">
        <HiMiniBars3 />
      </div>
      <div className="lg:hidden ml-5 cursor-pointer">
        <IoSearch />
      </div>
      <div className="font-bold lg:hidden ml-10 cursor-pointer hover:underline">
        <a href="/">WORLD NEWS</a>
      </div>
      <div className="p-4 mx-auto">
        <a href="/">
          <img src={logo} alt={logo} width={189} height={25.68} />
        </a>
      </div>
      <div className=" lg:p-4 lg:block hidden lg:mr-3">
        <FaUser />
      </div>
      <div className="lg:hidden p-4 cursor-pointer">
        <button className=" bg-navBlue px-3 py-1 text-white rounded-md absolute top-3 xl:right-36 right-72 hover:bg-hoverBlue">
          PLAY SPELLING BEE
        </button>
      </div>
      <div className="lg:hidden p-4 cursor-pointer">
        <button className=" bg-navBlue px-3 py-1 text-white rounded-md absolute top-3 xl:right-10 right-48 hover:bg-hoverBlue">
          LOG IN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
