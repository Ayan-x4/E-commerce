import { useEffect, useState } from "react";

const Banner2 = () => {
  const [data, setData] = useState([]);
  const [banners, setBanners] = useState([]);
  const [current, setCurrent] = useState([0, 1, 2]); 

  useEffect(() => {
    fetch("/Banner.json")
      .then((res) => res.json())
      .then((res) => {
        const shuffled = [...res.banner2].sort(() => Math.random() - 0.5);
        setData(res.banner2);
        setBanners(shuffled.slice(0, 3)); 
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev.map((val) =>
          val === data.length - 1 ? 0 : val + 1
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="flex gap-4 justify-center   ">
      
      {banners.map((_, i) => (
        <div
          key={i}
          className="md:h-[200px] h-[150px] md:w-[430px] w-[300px] overflow-hidden rounded-xl border-2 border-transparent hover:border-[#008ECC] duration-500 shrink-0  "
        >
          <img
            src={data[current[i]]?.image}
            alt=""
            className="h-full w-full  hover:scale-120 duration-500"
          />
        </div>
      ))}

    </div>
  );
};

export default Banner2;