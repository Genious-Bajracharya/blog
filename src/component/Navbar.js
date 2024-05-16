import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="flex top-1 absolute w-full px-4 bg-transparent justify-evenly self-stretch items-center z-10 ">
        <div className="flex gap-7 text-lg text-white ">
          <div className="text-3xl cursor-pointer font-medium">BlogzAll</div>
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Blogs</div>
          <div onClick={() => navigate("/contact")} className="cursor-pointer">
            Contact
          </div>
        </div>

        <form className="max-w-md w-96 mx-auto ">
          <label
            for="default-search"
            className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 opacity-50  bg-white border-none  rounded-md"
              placeholder="Search Blogs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex gap-5 left-1 ">
          <div className="cursor-pointer text-lg text-white">Log In</div>
          <button className="cursor-pointer w-24 h-9  text-lg bg-white  rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
