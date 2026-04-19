import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";

const Items = () => {
  const {theme,settheme}= useContext(Themecontext)

const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  async function getData() {
    try {
      const response = await fetch(
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
      );
      const result = await response.json();
      setData(result);
      setShow(true);
    } catch (error) {
      console.log("Error:", error);
    }
  }
useEffect(() => {
  getData();
}, []);

  const categories = [...new Set(data.map(item => item.subCategory))];

  return (
    <div className="no-scrollbar scroll-smooth  flex md:gap-2 gap-1 ">
     {categories.slice(9,19).map((cat,idx)=>(
    
      <button  className={` hover:bg-[#008ECC] bg-[#e5edf0] hover:text-white text-black  px-6 py-2 rounded-[20px] flex items-center text-center gap-1 hover:transition duration-300 cursor-pointer ${theme}`}>
          
          {cat}
        
        <span  className="">
          <ChevronDown size={15} strokeWidth={2} />
        </span>
      </button>))}
    </div>
  );
};

export default Items;
