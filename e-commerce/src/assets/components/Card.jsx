import React from "react";

const Card = () => {
  return (
    <div>
      <div className="md:h-[320px] h-[220px] md:w-[250px] w-[150px]  rounded-2xl border-1 md:border-[#EDEDED] border-[#008ECC] overflow-hidden hover:border-[#008ECC] duration-300 md:shadow-md cursor-pointer ">
        <div className="bg-[#EDEDED] md:h-[200px] h-[140px] w-full overflow-clip flex items-center relative ">
          <img
            src="https://ayanecommerce.netlify.app/s-l400-removebg-preview.png"
            alt="product"
            className="md:p-15 p-8"
          ></img>
          <div className="bg-[#008ECC] md:h-[60px] h-[40px] md:w-[60px] w-[40px] absolute top-0 right-0 md:p-2  text-center md:rounded-tr-1xl rounded-tr-xl md:rounded-bl-3xl rounded-bl-xl md:font-medium  text-white">
            <h1 className="md:text-[15px] text-[12px] md:p-0 p-1 text-center">
              56% OFF
            </h1>
          </div>
        </div>
        <div className="h-full w-full  md:p-3 p-2  ">
          <h1 className='md:font-medium font-medium  md:text-xl text-[14px] text-gray-900'>
            Redmi Note 7 Pro 
          </h1>
           <h1 className='md:font-bold font-bold  md:text-xl text-[14px] mt-1 mb-1 '>
           ₹14,999 <span className="md:font-medium font-medium  md:text-xl text-[14px] mt-1 text-gray-500 line-through decoration-1 decoration-gray-500 ml-1 ">₹16,999</span>
          </h1>
           <div className="h-[50px] w-full text-start  border-t-1 border-[#e4e4e4]">
          <h1 className="text-[#249B3E] font-normal md:mt-1 md:text-[20px] text-[13px]">Save - ₹1999</h1>
        </div>
        </div>
       
        
      </div>
      
    </div>
  );
};

export default Card;
