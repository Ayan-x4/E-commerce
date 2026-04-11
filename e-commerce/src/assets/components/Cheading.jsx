import { ChevronLeft, ChevronRight } from "lucide-react";

const Cheading = () => {
  return (
    <>
      <h1 className='md:font-medium text-[#666666] md:text-2xl text-[12px] underline decoration-[#008ECC] md:underline-offset-15 underline-offset-12 decoration-5 cursor-pointer'>Grab the deal on <span className='md:font-medium text-[#008ECC] md:text-2xl cursor-pointer'>SmartPhones</span></h1>
      <h1 className='md:font-small md:text-[15px] text-[12px] items-center flex absolute md:right-22 right-3 cursor-pointer'>View All <span className="text-[#008ECC] cursor-pointer"><ChevronRight strokeWidth={1.5}/></span></h1>
    </>
  )
}

export default Cheading
