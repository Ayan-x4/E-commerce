import { ChevronDown } from "lucide-react";

const iItems = () => {
  return (
    <div className="flex justify-around items-center md:p-4 p-1 md:px-20 px-1 md:font-medium md:text-[12px] text-[10px] md:gap-1 gap-3 whitespace-nowrap">
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Groceries{" "}
        <span className="">
          <ChevronDown strokeWidth={2}  />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Premium Fruits{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Homes & Kitchen{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Fashion{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Electonics{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Beauty{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Home Improvment{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
      <button className=" hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300">
        Sports,Toys & Lugges{" "}
        <span className="">
          <ChevronDown strokeWidth={2} />
        </span>
      </button>
    </div>
  );
};

export default iItems;
