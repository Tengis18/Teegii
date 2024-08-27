import { Hand } from "./Hand";
import { Close } from "./svg/Close";

export const Shin = ({ onClick, handleMenu }) => {
  return (
    <div className=" absolute top-0 right-0 container m-auto h-screen w-[90%] bg-[#ffff] flex-col flex  px-[32px] pt-10  dark:bg-black dark:text-white">
      <div className="flex justify-between">
        <p className="flex justify-self-start text-[50px] leading-9 not-italic font-bold translate-[0.6px] mr-10 dark:text-[#F9FAFB] pb-5">
          TENGIS
        </p>
        <button onClick={onClick}>
          <Close />
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-3 pt-4 pb-4 text-[16px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB]">
         <button onClick={handleMenu}>
          <a href="#Hero">About</a>
          </button>
          <button onClick={handleMenu}>
          <a href="#Footer">Work</a>
          </button> 
          <button onClick={handleMenu}>
          <a href="#Work">Testimonials</a>
          </button> 
          <button onClick={handleMenu}>
          <a href="#End">Contact</a>
          </button> 
      </div>
      <hr />
      <div className="flex justify-between pt-4 text-[16px] leading-7 font-normal text-gray-600 dark:text-[#D1D5DB] ">
        <p>Switch Theme</p>
        <Hand />
      </div>
      <button className="bg-black w-full text-white rounded-2xl text-[16px] dark:bg-white dark:text-black mt-3">
        Download Cv
      </button>
    </div>
  );
};
