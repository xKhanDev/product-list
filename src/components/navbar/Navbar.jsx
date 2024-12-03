import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserLogOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="w-full h-20 shadow flex justify-between items-center px-4">
      <div className="lg:w-1/2 w-[73%] flex items-center justify-center h-10  border border-border rounded-lg p-2">
        <input
          type="text"
          placeholder="Search in product"
          className="h-full focus:outline-none w-full"
        />
        <IoMdSearch className="cursor-pointer text-lg" />
      </div>
      <div className="lg:w-1/2 flex items-center justify-between">
        <span className="hidden lg:block"></span>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-full size-14 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        {open ? (
          <ul className="z-50 flex flex-col gap-2 bg-gray-400 text-white rounded-lg p-2 absolute top-[11.5%] lg:top-[13%] right-12 w-32 *:p-2 capitalize">
            <li
              className="cursor-pointer h-12 hover:bg-gray-300 hover:text-gray-800 text-center content-center ease-in duration-300"
              onClick={() => Navigate("/")}
            >
              Products
            </li>
            <li
              className="cursor-pointer h-12 hover:bg-gray-300 hover:text-gray-800 text-center content-center ease-in duration-300"
              onClick={handleUserLogOut}
            >
              LogOut
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
