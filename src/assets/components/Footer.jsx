import React, { useContext } from "react";
import { Themecontext } from "../../Contextuse";

const Footer = () => {
  const {theme,settheme} = useContext(Themecontext)
  return (
    <>
    <div className="md:h-[120%] h-[100%] border-b-2 border-[#05ABF3]">
      <div className="md:w-150 w-70 md:h-150  h-70   rounded-[50%]  md:ml-300 ml-60 md:mt-[-180px] mt-[-50px] md:border-3 border-2 border-[#05ABF3] flex  ">
        <div className="w-full h-full bg-[#05ABF3] rounded-[50%] md:border-10 border-8 border-[#008ECC] "></div>
      </div>
      <div className="h-100 w-full  md:ml-25 ml-3 md:mr-25 mr-3 p-1 bg absolute top-0 md:mt-20 mt-15">
        <h1 className="md:text-5xl text-4xl font-medium text-white md:mb-10 mb-5 ">
          MegaMart
        </h1>{" "}
        <span className="text-medium font-medium text-white ml-2">
          Contact Us
        </span>
        <div className="md:h-8 h-6 md:w-8 w-6  ml-2 md:mt-8 mt-4 flex justify-center items-center mb-10   ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                fill="#ffffff"
              ></path>{" "}
            </g>
          </svg>
          <div className="md:text-medium text-sm font-medium text-white absolute md:ml-40 ml-38 items-center mt-2 text-nowrap  ">
            <h1>WhatsApp</h1>
            <h1>+1 202-918-2132</h1>
          </div>
        </div>
        <div className="md:h-8 h-6 md:w-8 w-6  ml-2 md:mt-8 mt-4 flex justify-center items-center mb-10   ">
       <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.5 8 11.3894 12.6113C16.2788 17.2226 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <div className="md:text-medium text-sm font-medium text-white absolute md:ml-40 ml-38 items-center mt-2 text-nowrap  ">
            <h1>Call Us</h1>
            <h1>+1 202-918-2132</h1>
          </div>
        </div>
        <div className="md:h-100 h-60 md:w-100 w-60 ml-2    ">
          <h1 className="ml-2 md:text-3xl text-xl font-medium text-white ">
          Download App
          </h1>
          <div className="md:h-130 h-100 md:w-130 w-100 flex md:p-35 p-30 justify-center md:mt-[-200px] mt-[-150px] md:ml-[-30px] ml-[-40px]">
          <img src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-play-app-icon-vector-png-image_12256664.png" className=" object-contain"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" className="h-full w-full object-contain" ></img>
          </div>
        </div>
        <div>
        </div>
       
      </div>
       <div className="md:absolute  md:top-[-150px] md:left-0 md:right-0 md:translate-x-1/2 md:translate-y-1/2 md:mt-20 mt-50 md:ml-[0] ml-7">
          <h1 className="md:text-2xl text-xl font-medium text-white underline underline-offset-10 mb-4">
            Most Popular Categories
          </h1>
          <div className="leading-loose text-white list-disc pl-4">
          <li>Staples</li>
          <li>Electronics</li>
          <li>Furnitures</li>
          <li>Home Appliances </li>
          <li>Vegetables & fruits</li>
          <li>Baby Care</li>
          <li>Home care</li>
          <li>Clothe's</li>
          <li>Sports and Games</li>
          </div>
        </div>
      <div className="md:absolute   md:top-[-150px]  md:left-[800px] md:right-0 md:translate-x-1/2 md:translate-y-1/2 md:mt-20 mt-8 md:ml-[0] ml-7">
          <h1 className="md:text-2xl text-xl font-medium text-white underline underline-offset-10 mb-4">
           Customer Services
          </h1>
          <div className="leading-loose text-white list-disc pl-4  ">
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>E-waste Policy</li>
          <li>Cancellation & Return Policy</li>
          <li>Md Ayan</li>
          <li>Frontend Developer</li>
          <li>MegaMart By Ayan </li>
          </div>
        </div>
    </div>
    <h1 className="flex justify-center items-center text-white mt-4 leading-normal">© 2022 All rights reserved. MegaMart Ayan Ltd.</h1>
    </>
  );
};

export default Footer;
