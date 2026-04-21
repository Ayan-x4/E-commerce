import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";

const Card2 = () => {
const {theme,settheme} = useContext(Themecontext)
const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  async function getData() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/groceries"
      );
      const result = await response.json();
      setData(result.products);
      setShow(true);
    } catch (error) {
      console.log("Error:", error);
    }
  }
useEffect(() => {
  getData();
}, []);

return(
  <>
  {data.slice(0,24).map((card)=>(
  <div  key={card.id} >
  
    <div className={`md:h-[200px] h-[100px] md:w-[200px] w-[100px]  m-1 flex items-center overflow-hidden shrink-0  md:rounded-2xl rounded-xl bg-[#EDEDED] md:border-2 border-1 md:border-transparent md:border-[#EDEDED] border-[#008ECC]  hover:border-[#008ECC] duration-300  cursor-pointer  hover:shadow-[2px_2px_5px_1px_rgba(0,0,0,0.1)] md:mb-1 ${theme}`}>
    <img src={card.images} className="h-full w-full object-contain p-3 hover:scale-120 duration-500"></img>
    </div>
    <div className="text-center md:m-3 md:mb-20 mb-10 bg">
      <h1 className={`md:text-[16px] md:font-medium text-[12px] text-[#666666] ${theme}`}>
        {card.title}
      </h1>
      <span className={`font-bold md:text-[18px] text-[14px] text-[#272727] font-[HK Grotesk] ${theme}`}>UP to 56% OFF</span>
    </div>
  </div>
  ))}
  </>
    
)
}

export default Card2
 