import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useContext } from "react";
import  { Themecontext } from "../../Contextuse";

const Cheading = (props) => {
  const{theme,settheme} = useContext(Themecontext)
  return (
    <>
      <h1 className={`md:font-medium font-bold text-[#666666] md:text-2xl text-[12px] underline decoration-[#008ECC] md:underline-offset-15 underline-offset-10 md:decoration-5 decoration-2 cursor-pointer ${theme}`}>{props.name}<span className='md:font-medium text-[#008ECC] md:text-2xl cursor-pointer'>{props.pro}</span></h1>
      <h1 className='md:font-small  md:text-[15px] text-[12px] items-center flex absolute md:right-22 right-3 cursor-pointer'>View All <span className="text-[#008ECC] cursor-pointer "><ChevronRight strokeWidth={1.5} className="w-4 h-4 md:w-4 md:h-4 flex item-center"/></span></h1>
    </>
  )
}

export default Cheading
