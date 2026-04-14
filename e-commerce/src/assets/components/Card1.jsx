import React from "react";

const Card1 = () => {
  return (
    <div className="">

    
    <div className='md:h-[120px] md:w-[120px]  rounded-[50%] overflow-clip  items-center justify-center flex bg-[#F5F5F5] md:border-[1.5px] md:shadow-[0] shadow-[0px_1px_5px_0.1px_rgb(0,0,0,0.2)]  md:border-white border-[#008ECC] hover:border-[#008ECC] duration-200 cursor-pointer hover:shadow-[0px_2px_10px_0.1px_rgb(0,0,0,0.2)] duration-300'>
      <div className="h-[100px]  w-[100px] md:p-5 p-5 flex items-center ">
        <img
        src="https://i03.appmifile.com/64_item_in/24/09/2024/31d49f309ee439ce4ce5f1a7f44f1504.png?thumb=1&w=600&f=webp&q=85"
        alt=""
      ></img>
      </div>
    </div>
    <h1  className="flex justify-center font-normal md:text-[14px] text-[10px] m-1 ">
      Smart Watch
    </h1>
    </div>
    
  );
};

export default Card1;
