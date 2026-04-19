import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";
const Card1 = () => {
  const {theme,settheme} = useContext(Themecontext)
   const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  async function getData() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?sortBy=title&order=asc",
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
  return (
    <>
    {data.slice(20/2).map((card)=>(
    <div key={card.id} >
  

    
    <div className={`md:h-[120px] md:w-[120px]  rounded-[50%] overflow-clip  items-center justify-center flex bg-[#F5F5F5] md:border-transparent md:border-[0px] border-1 md:shadow-[0px_1px_5px_0.1px_rgb(0,0,0,0.2)]  border-[#008ECC] hover:border-[#008ECC] duration-200 cursor-pointer shadow-none hover:shadow-[0_0_18px_#008ECC,0_0_5px_#008ECC] duration-300 ${theme}`}>
      <div className="h-[100px]  w-[100px] md:p-2 p-2 flex items-center ">
        <img
        src={card.thumbnail}
        alt=""
      ></img>
      </div>
    </div>
    <h1  className="flex justify-center font-normal md:text-[14px] text-[10px] m-1 md:mt-2 mt-3">
      {card.category}
    </h1>
    </div>))}
    </>
    
  );
};

export default Card1;
