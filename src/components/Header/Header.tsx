import { useState } from "react";
import logo from "../../assets/The_New_York_Times_logo.png";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const[sidebarActive, setSidebarActive] = useState<boolean>(true);

  return (
    <header className="flex flex-row lg:justify-between border-b-2 relative items-center container">
      <div className=" p-4 xl:ml-3 ml-48 cursor-pointer">
      <HiMiniBars3 onClick={() =>setSidebarActive(!sidebarActive)}/>
        {!sidebarActive ? 
        <div className="flex w-72 h-screen fixed top-0 left-0 z-10 border-r-2 bg-white">
          <IoMdClose onClick={()=>setSidebarActive(!sidebarActive)} className="absolute right-0 top-6 w-10 h-5"/>
          <ul className="p-6 w-full font-bold text-lg flex flex-col justify-between flex-wrap">
            <li className=" hover:bg-slate-100 rounded-md"><a href="/">Home Page</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">World</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Business</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">U.S. Politics</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">U.S. News</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">U.S. Sports</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">U.S. Health</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">U.S. N.Y.</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Opinion</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Tech</a></li>
            <li className="hover:bg-slate-100 rounded-md border-b-2 pb-2"><a href="/">Science</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Arts</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Book Review</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Style</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Food</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Travel</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Magazine</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Real Estate</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Obituaries</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Video</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">Graphics</a></li>
            <li className="hover:bg-slate-100 rounded-md border-b-2 pb-2"><a href="/">The Upshot</a></li>
            <li className="hover:bg-slate-100 rounded-md"><a href="/">More</a></li>
          </ul>
        </div> : ""}
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
      <div className="lg:hidden p-4 cursor-pointer mx-auto">
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
