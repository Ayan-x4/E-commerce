import React from "react";
import {
  Menu,
  Search,
  List,
  User,
  ShoppingCart,
  Tally1,
  Fullscreen,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex  items-center  justify-around  p-4">
      <div className="flex  items-center gap-5">
        <Menu
          strokeWidth={1}
          className=" size-10 bg-[#F3F9FB] rounded-[5px] text-[#008ECC] "
        />
        <h1 className="text-[#008ECC] text-3xl font-bold ">MegaMart</h1>
      </div>
      <div className="relative flex items-center  justify-center">
        <Search
          strokeWidth={1}
          className="absolute left-0  size-6  text-[#008ECC] m-2 "
        />
        <input size={70}
          placeholder="Search"
          className="bg-[#F3F9FB] p-2  text-[#008ECC] placeholder:text-[#008ECC] border-none  focus:outline-none focus:ring-1 focus:ring-blue-500  text-center rounded-[5px]  text-start px-9"
        />
        <List
          strokeWidth={1}
          className=" absolute right-0 size-6  text-[#008ECC] m-2"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <User strokeWidth={1} className=" text-[#008ECC] " />
        <h1 className=" font-medium">Sign Up /</h1>
        <h1 className=" font-medium">Sign In</h1>
        <Tally1 strokeWidth={2} className=" ml-2 text-[#747474] "/>
        <ShoppingCart strokeWidth={2} className=" text-[#008ECC] " />
        <h1 className="font-medium">Cart</h1>
      </div>
    </div>
  );
};

export default Navbar;
