import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import { Themecontext } from "../../Contextuse";

const Banner = () => {
  const { theme } = useContext(Themecontext);

  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/Banner.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.banner);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === data.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(interval);
}, [data]);

  return (
    <div className="relative md:h-[350px] h-[180px] md:w-[1340px] overflow-hidden rounded-xl ">

      {/* ✅ Single Image */}
      <img
        src={data[current]?.image}
        alt=""
        className="w-full h-full  "
      />

      {/* ⬅️ Left */}
      <div
        onClick={() =>
          setCurrent(current === 0 ? data.length - 1 : current - 1)
        }
        className={`cursor-pointer md:h-[80px] h-[40px] md:w-[80px] w-[40px] bg-[#F3F9FB] ${theme} absolute left-0 top-1/2 -translate-y-1/2 rounded-full md:ml-16 ml-1 flex items-center justify-center active:bg-gray-200`}
      >
        <ChevronLeft strokeWidth={1} color="#008ECC" />
      </div>

      {/* ➡️ Right */}
      <div
        onClick={() =>
          setCurrent(current === data.length - 1 ? 0 : current + 1)
        }
        className={`cursor-pointer md:h-[80px] h-[40px] md:w-[80px] w-[40px] bg-[#F3F9FB] ${theme} absolute right-0 top-1/2 -translate-y-1/2 rounded-full md:mr-16 mr-1 flex items-center justify-center active:bg-gray-200`}
      >
        <ChevronRight strokeWidth={1} color="#008ECC" />
      </div>
    </div>
  );
};

export default Banner;
