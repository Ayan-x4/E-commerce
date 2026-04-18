
import Navbar from "./assets/components/Navbar";
import Items from "./assets/components/Itemsbar";
import Banner from "./assets/components/Banner";
import Cheading from "./assets/components/Cheading";
import Card from "./assets/components/Card";
import Card1 from "./assets/components/Card1";
import Banner2 from "./assets/components/Banner2";
import Card2 from "./assets/components/Card2";
import Footer from "./assets/components/Footer";




const App = () => {
  const arr = [
    { heading: "Grab the deal on ", product: "Smartphones"},
    { heading: "Shop From ", product: "Top Categories" },
    { heading: "Top ", product: "Electronics Brands" },
    { heading: "Daily ", product: "Essentials"},
    {banner : "https://mcsolution.com.bd/wp-content/uploads/2023/05/Lenovos-New-Gaming-Laptop-Lenovo-LOQ-Price-Features-and-Warranty-in-Bangladesh-MCsolution-BD.webp"},
    {banner : "https://rukminim1.flixcart.com/fk-p-flap/1570/610/image/5607aba9662ec5ef.png?q=80"},
    {banner : "https://rukminim1.flixcart.com/fk-p-flap/1600/780/image/e0b3df3b00aec0d7.png?q=80"},
    {banner : "https://rukminim1.flixcart.com/fk-p-flap/3200/1560/image/a29749f09ee074fa.png?q=60"},
    {banner : "https://rukminim1.flixcart.com/fk-p-flap/1600/1000/image/b7ed6a674ddd2469.jpg?q=80"},
    {banner : "https://rukminim1.flixcart.com/fk-p-flap/1600/780/image/e2620e20463c6c4a.png?q=80"},
    {banner2 : "https://cdn.phonebunch.com/news-images/2026/02/Samsung-galaxy-s26-ultra-offical-teaser.webp"},
    {banner2 : "https://rukminim1.flixcart.com/fk-p-flap/1600/1000/image/ac12efa7fd23cd7b.jpg?q=80"},
    {banner2 : "https://img.freepik.com/free-psd/smartphone-camera-control-social-media-banner-design-template_47987-25416.jpg?semt=ais_hybrid&w=740&q=80"},
  ]
  return (
    <section className="no-scrollbar ">
      <div className="md:py-2 py-0.5 md:px-5 px-0.5">
        <Navbar />
      </div>
      <div className="border-1 border-gray-200  flex justify-around items-center md:p-4 p-1 md:px-20 px-1 md:font-medium md:text-[12px] text-[10px] md:gap-1 gap-1  whitespace-nowrap overflow-x-scroll no-scrollbar">
      <Items />
      </div>
      <div className=" flex overflow-x-auto  no-scrollbar items-center  md:ml-25 ml-1 md:mr-25  mr-1 cursor-pointer snap-x snap-mandatory scroll-smooth md:rounded-2xl  rounded-xl md:mt-4 mt-1 ">
        <div className="flex shrink-0  gap-4   md:py-2 py-1 md:px-0 px-2 ">
        {arr.slice(4,).map((elem,idx)=>(
          <Banner img = {elem.banner} />
          ))}
        </div>
        
      </div>
      <div  className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-20 mt-10 border-b-1 border-gray-300">
        {arr.slice(0,1).map((elem, idx) => (
        <Cheading  name = {elem.heading} pro = {elem.product}  />
      ))}
      </div>
      <div className="md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around ">
        <Card />
      </div>
      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-20 mt-10 border-b-1 border-gray-300">
       {arr.slice(1,2).map((elem, idx) => (
        <Cheading  name = {elem.heading} pro = {elem.product}  />
      ))}
      </div>
      <div className='md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around p-1'>
      <Card1/>
      </div>
      <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
      {arr.slice(2,3).map((elem, idx) => (
        <Cheading  name = {elem.heading} pro = {elem.product}  />
      ))}
      </div>
      <div className='md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around p-0 '>
      {arr.slice(10,).map((elem,idx)=>(
          <Banner2 img = {elem.banner2} />
          ))}
      </div>
       <div className="md:h-[55px] h-[32px] md:w-[full] flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 border-b-1 border-gray-300">
       {arr.slice(3,4).map((elem, idx) => (
        <Cheading  name = {elem.heading} pro = {elem.product}  />
      ))}
      </div>
      <div className='md:w-[full]  flex items-center md:ml-25 ml-3 md:mr-25 mr-3 md:mt-10 mt-5 md:gap-2 gap-3 md:flex-wrap overflow-x-auto no-scrollbar md:justify-between justify-around p-1 '>
        <Card2/>
      </div>
      <div className='w-[full] md:h-200 h-310  bg-[#008ECC]   overflow-hidden relative md:p-24 p-3 '>
          
        <Footer/>
      </div>
    </section>
  );
};

export default App;
