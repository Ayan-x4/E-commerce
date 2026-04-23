import { ChevronDown } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Themecontext } from "../../Contextuse";

const Card6 = () => {
  const { theme } = useContext(Themecontext);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/All.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.ExclusiveOffers);

        setTimeout(() => {
          const first = [...res.ExclusiveOffers].sort(() => Math.random() - 0.5);

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
              className="md:h-[300px] h-[150px] md:w-[300px] w-[150px] [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] bg-gray-200 animate-pulse"
            >
              <div className="h-[140px] md:h-[200px] bg-gray-300"></div>
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
      {visible.map((card) => (
        <div key={card.id}>
          <div
            className={`md:h-[300px] h-[150px] md:w-[300px] w-[150px]  m-1 flex items-center overflow-hidden shrink-0 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]  bg-[#EDEDED] md:border-2 border-1 md:border-transparent md:border-[#EDEDED] border-[#008ECC]  hover:border-[#008ECC] duration-300  cursor-pointer  hover:shadow-[2px_2px_5px_1px_rgba(0,0,0,10)] md:mb-1 ${theme}`}
          >
            <img
              src={card.thumbnail}
              className="h-full w-full object-contain md:p-10 p-5 hover:scale-120 duration-500"
            ></img>
          </div>
          <div className="text-center md:m-3 md:mb-5 mb-1 bg">
            <h1
              className={`md:text-[14px] md:font-medium text-[11px] text-[#666666] ${theme}`}
            >
              {card.title}
            </h1>
            <span
              className={`font-bold font-sans md:text-[15px] text-[15px] text-[#272727] font-[HK Grotesk] ${theme}`}
            >
              UP to {card.discountPercentage}<span>%</span> OFF
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card6;
