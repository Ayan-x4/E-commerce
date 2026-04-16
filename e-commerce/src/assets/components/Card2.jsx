
const Card2 = () => {
  return (
  <div>
    <div className="md:h-[200px] h-[100px] md:w-[200px] w-[100px]  m-1 flex items-center overflow-hidden shrink-0  md:rounded-2xl rounded-xl bg-[#EDEDED] border-1 md:border-[#EDEDED] border-[#008ECC]  hover:border-[#008ECC] duration-300  cursor-pointer  hover:shadow-[2px_2px_5px_1px_rgba(0,0,0,0.1)] md:mb-1">
    <img src="https://ayanecommerce.netlify.app/s-l400-removebg-preview.png" className="h-full w-full object-contain p-3"></img>
    </div>
    <div className="text-center md:m-3 md:mb-20 mb-10 bg">
      <h1 className="md:text-[16px] md:font-medium text-[12px] text-[#666666]">
        Electronics
      </h1>
      <span className="font-bold md:text-[18px] text-[14px] text-[#272727] font-[HK Grotesk]">UP to 56% OFF</span>
    </div>
  </div>
    
  )
}

export default Card2
 