
import {
  Menu,
  Search,
  List,
  User,
  ShoppingCart,
  Tally1,
  ChevronDown 
} from "lucide-react";

const Navbar = () => {

  return (
    <div className="flex  items-center  md:justify-between justify-around md:pl-20  md:py-4 py-1 ">
      <div className="flex  items-center md:gap-5 gap-2">
        <Menu
          strokeWidth={1}
          className=" md:size-10 size-5 bg-[#F3F9FB] md:rounded-[5px] rounded-[2px]  text-[#008ECC] "
        />
        <h1 className="text-[#008ECC] md:text-3xl text-[14px] font-bold ">MegaMart</h1>
      </div>
      <div className="relative flex items-center justify-between">
        <Search
          strokeWidth={1}
          className="absolute left-0  md:size-6  size-6 text-[#008ECC] md:m-2 m-1 "
        />
        <input 
          placeholder="Search"
          className="bg-[#F3F9FB] md:p-2  p-0.5 text-[#008ECC] placeholder:text-[#008ECC] border-none  focus:outline-none focus:ring-1 focus:ring-blue-500  text-center md:rounded-[8px] rounded-[4px]  md:w-2xl w-[250px] md:text-start md:px-9 px-6"
        />
        <List
          strokeWidth={1}
          className=" absolute right-0 md:size-6 size-6  text-[#008ECC] md:m-2 m-1"
        />
      </div>

      <div className="md:flex hidden items-center md:gap-2 gap-0.5">
        <User strokeWidth={1} className=" text-[#008ECC]  " />
        <h1 className=" md:font-medium font-light md:text-[16px] text-[10px] whitespace-nowrap">Sign Up /</h1>
        <h1 className=" md:font-medium font-light md:text-[16px] text-[10px]">Sign In</h1>
        <Tally1 strokeWidth={2} className=" md:ml-3 ml-1 text-[#747474] "/>
        <ShoppingCart strokeWidth={2} className=" text-[#008ECC] " />
        <h1 className="font-medium">Cart</h1>
      </div>
      <div>
        
      </div>
    </div>
    
  );
};

export default Navbar;
