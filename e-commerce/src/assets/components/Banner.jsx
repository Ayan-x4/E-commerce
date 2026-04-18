import { ChevronLeft, ChevronRight } from "lucide-react";
const Banner = (props) => {
  return (
    <div className="flex  items-center justify-center  md:h-[350px] h-[180px]  md:rounded-2xl  rounded-xl overflow-x-auto ">
      <img
        src={props.img}
        alt=""
        className=" w-full h-full object-cover"
      />
      <div className="md:h-[80px] h-[40px] md:w-[80px] w-[40px] bg-[#F3F9FB] text-center absolute left-0 rounded-full md:not-only:ml-16 ml-1 overflow-hidden md:p-2 p-1 md:border-4 border-2 border-white">
        <ChevronLeft
          strokeWidth={1}
          color="#008ECC"
          className="object-cover h-full w-full "
        />
      </div>
      <div className="md:h-[80px] h-[40px] md:w-[80px] w-[40px] bg-[#F3F9FB] text-center absolute right-0 rounded-full md:not-only:mr-16 mr-1 overflow-hidden md:p-2 p-1 md:border-4 border-2 border-white ">
        <ChevronRight
          strokeWidth={1}
          color="#008ECC"
          className="object-cover h-full w-full "
        />
      </div>
    </div>
  );
};

export default Banner;
