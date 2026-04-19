import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";

const Card = () => {
  const {theme,settheme} = useContext(Themecontext)
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  async function getData() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/category/smartphones",
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
    <div className="flex  md:gap-3 gap-2" >
      {data.slice(4).map((item) => (
        <div  key={item.id}  className="md:h-[320px] h-[220px] md:w-[250px] w-[150px]  rounded-2xl md:border-[1.8px] border-1 md:border-transparent md:border-[#EDEDED] border-[#008ECC] overflow-hidden hover:border-[#008ECC] duration-500 md:shadow-[1px_1px_1px_1px_rgba(0,0,0,0.3)] cursor-pointer  hover:shadow-[2px_2px_10px_1px_rgba(0,0,0,0.1)] md:mb-1">
          <div className={`bg-[#EDEDED] ${theme} md:h-[200px] h-[140px] w-full overflow-clip flex items-center relative `}>
            <img src={item.thumbnail} alt="product" className="md:p-15 p-8 hover:scale-120 duration-300"></img>
            <div className="bg-[#008ECC] md:h-[60px] h-[40px] md:w-[60px] w-[40px] absolute top-0 right-0 md:p-2 text-center md:rounded-tr-1xl rounded-tr-xl md:rounded-bl-3xl rounded-bl-xl md:font-medium  text-white">
              <h1 className="md:text-[15px] text-[10px] md:p-0 p-1 text-center">
                {item.discountPercentage}<span>%</span> OFF
              </h1>
            </div>
          </div>
          <div className="h-full w-full  md:p-3 p-2  ">
            <h1 className={`${theme} md:font-medium font-medium  md:text-xl text-[14px] text-gray-900`}>
              {`${item.title}`}
            </h1>
            <h1 className="md:font-bold font-bold  md:text-xl text-[14px] mt-1 mb-1 ">
              <span>$</span> {item.price}{" "}
              <span className="md:font-medium font-medium  md:text-xl text-[14px] mt-1 text-gray-500 line-through decoration-1 decoration-gray-500 ml-1 ">
                <span>$</span> {item.price}{" "}
              </span>
            </h1>
            <div className="h-[50px] w-full text-start  border-t-1 border-[#e4e4e4]">
              <h1 className="text-[#249B3E] font-normal md:mt-1 md:text-[20px] text-[13px]">
                <span>$</span> {item.price}{" "}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
