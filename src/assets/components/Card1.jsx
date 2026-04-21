import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";
const Card1 = () => {
   const { theme } = useContext(Themecontext);

  const [data, setData] = useState([]);
  const [visible, setVisible] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/Banner.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.categories);

        setTimeout(() => {
          const first = [...res.categories].sort(() => Math.random() - 0.5);

          setVisible(first);
          setShow(true);
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

 useEffect(() => {
    if (!show || data.length === 0) return;

    const interval = setInterval(() => {
      const randomItems = [...data].sort(() => Math.random() - 0.5);

      setVisible(randomItems);
    }, 5000);

    return () => clearInterval(interval);
  }, [show, data]);

  if (!show) {
    return (
      <div className="flex md:gap-3 gap-2">
        {Array(6)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="md:h-[200px] h-[100px] md:w-[200px] w-[100px] rounded-full bg-gray-200 animate-pulse"
            >
              <div className="h-[100px] md:h-[200px] rounded-full bg-gray-300"></div>
              <div className="p-2 space-y-2">
                <div className="h-4 bg-gray-300 w-3/4"></div>
                <div className="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  return (
    <>
    {visible.map((card)=>(
    <div key={card.id} >
  

    
    <div className={`md:h-[120px] md:w-[120px]  rounded-[50%] overflow-clip  items-center justify-center flex bg-[#F5F5F5] md:border-transparent md:border-[0px] border-1 md:shadow-[0px_1px_5px_0.1px_rgb(0,0,0,0.2)]  border-[#008ECC] hover:border-[#008ECC] duration-200 cursor-pointer shadow-none hover:shadow-[0_0_18px_#008ECC,0_0_5px_#008ECC] duration-300 ${theme}`}>
      <div className="h-[100px]  w-[100px] md:p-2 p-[14px] flex items-center ">
        <img
        src={card.image}
        alt=""
      ></img>
      </div>
    </div>
    <h1  className="flex justify-center font-normal md:text-[14px] text-[10px] m-1 md:mt-2 mt-3">
      {card.categoryName}
    </h1>
    </div>))}
    </>
    
  );
};

export default Card1;
