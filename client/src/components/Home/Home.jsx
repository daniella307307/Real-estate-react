import { FaSlidersH, FaTimes } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Home() {
  const handleSubmit = ()=>{
    window.location.pathname="/grid"
  }
  return (
    <div className="w-[100vw]">
      <div className="flex items-center gap-[8em] px-20 justify-center">
        <div className=" flex items-center gap-4 px-10 w-[60vw] bg-gray-100 px-8 py-4 rounded-[3em]">
        <FontAwesomeIcon className="text-gray-400 text-lg" icon={faSearch}/>
          <input
            type="search"
            placeholder="Search for anything..."
            className=" w-[100%] focus:outline-none bg-transparent"
          />
          
        </div>
        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-[3em] cursor-pointer">
           <FaSlidersH  className="text-gray-400 text-lg"/>
           <span className="font-bold"> Filters</span>
        </div>
      </div>
      <div className="px-24 mt-4 flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100 w-[6em] rounded-[3em] p-2 ">
          <span className="text-sm text-light font-bold text-gray-500 ">Chicago</span>
          <FaTimes className="text-gray-500 "/>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 w-[6em] rounded-[3em] p-2 ">
          <span className="text-sm text-light font-bold text-gray-500 ">Nevada</span>
          <FaTimes className="text-gray-500 "/>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 w-[7em] rounded-[3em] p-2 ">
          <span className="text-sm text-light font-bold text-gray-500 ">Cute, cozy</span>
          <FaTimes className="text-gray-500 "/>
        </div>
      </div>
      <div className="px-10 mt-8 flex items-center gap-4">
        <div onClick={handleSubmit} className="flex items-center gap-6  font-bold hover:text-blue-800 hover:border-b-[2px] hover:border-blue-800  hover:cursor-pointer">
        <HiOutlineViewGrid className="text-[1.4em]" />
        <span>Grid</span>
        </div>|
        <div className="flex items-center gap-6 font-bold hover:text-blue-800 hover:border-b-[2px] hover:border-blue-800  hover:cursor-pointer">
        <CiMap  className="text-[1.4em]"/>
        <span>Map</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
