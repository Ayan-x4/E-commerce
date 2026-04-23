import Navbar from "./assets/components/Navbar";
import Items from "./assets/components/Itemsbar";
import Banner from "./assets/components/Banner";
import Cheading from "./assets/components/Cheading";
import Card from "./assets/components/Card";
import Card1 from "./assets/components/Card1";
import Banner2 from "./assets/components/Banner2";
import Card2 from "./assets/components/Card2";
import Footer from "./assets/components/Footer";
import Card3 from "./assets/components/Card3";
import Card4 from "./assets/components/Card4";
import Card5 from "./assets/components/Card5";
import Card6 from  "./assets/components/Card6";

import { useContext } from "react";
import { Themecontext } from "./Contextuse";


const App = () => {
  const { theme } = useContext(Themecontext);

  const arr = [
    { heading: "Grab the deal on ", product: "Smartphones" },
    { heading: "Shop From ", product: "Top Categories" },
    { heading: "Top ", product: "Electronics Brands" },
    { heading: "Daily ", product: "Essentials" },
    { heading: "Best Deals on ", product: "Laptops" },
    { heading: "Explore ", product: "Fashion Trends" },
    { heading: "Upgrade Your ", product: "Home Appliances" },
    { heading: "Trending ", product: "Gadgets" },
    { heading: "Exclusive ", product: "Offers" },
    { heading: "New Arrivals in ", product: "Accessories" },
    { heading: "Top Picks for ", product: "Gaming" },
    { heading: "Limited Time ", product: "Discounts" },
    { heading: "Must-Have ", product: "Kitchen Items" },
    { heading: "Shop Premium ", product: "Brands" },
    { heading: "Hot Deals on ", product: "Wearables" },
    { heading: "Discover ", product: "Beauty Products" },
  ];
  return (
    <section className={`no-scrollbar ${theme} `}>
      <div className="md:py-2 py-0.5 md:px-5 px-0.5 ">
        <Navbar />
      </div>
      <div className="border-1 border-gray-200  flex justify-around items-center md:p-4 p-1 md:px-20 px-1 md:font-medium md:text-[12px] text-[10px] md:gap-1 gap-1  whitespace-nowrap overflow-x-scroll no-scrollbar  ">
        <Items />
      </div>
      <div className=" flex overflow-x-auto  no-scrollbar items-center  md:ml-25 ml-1 md:mr-25  mr-1 cursor-pointer snap-x snap-mandatory scroll-smooth md:rounded-2xl  rounded-xl md:mt-5 mt-4 justify-center">
        <div className="flex shrink-0  gap-4  w-full  md:py-0 py-0 md:px-0 px-3 ">
          <Banner />
        </div>
      </div>
      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-20 mt-10 border-b-1 border-gray-300">
        {arr.slice(0, 1).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card />
      </div>
      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-20 mt-10 border-b-1 border-gray-300">
        {arr.slice(1, 2).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-4 gap-3  overflow-x-auto no-scrollbar md:justify-between justify-around md:p-3">
        <Card1 />
      </div>
      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
        {arr.slice(2, 3).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around p-0 ">
        <Banner2 />
      </div>

      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
        {arr.slice(4, 5).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card3 />
      </div>
       <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
        {arr.slice(5, 6).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card4 />
      </div>

      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
        {arr.slice(6, 7).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card5 />
      </div>
       <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300 ">
        {arr.slice(8, 9).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-9 gap-3  overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card6 />
      </div>




      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
        {arr.slice(3, 4).map((elem, idx) => (
          <Cheading name={elem.heading} pro={elem.product} />
        ))}
      </div>
      <div className="md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-0 gap-2 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around p-1 ">
        <Card2 />
      </div>

      <div className="w-[full] md:h-200 h-270  bg-[#008ECC]   overflow-hidden relative md:p-24 p-3  ">
        <Footer />
      </div>
    </section>
  );
};

export default App;
