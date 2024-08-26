import { Hand } from ".";
import { ButtonDowload } from "./svg/ButtonDowload";
import { HeadTitel } from "./svg/HeadTitel";
import { LogoButton } from "./svg/LogoButton";
import { Tov } from "./svg/Tov";
import { Shin } from "./Shin";
import { useState } from "react";

export const Head = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className="container m-auto h-auto bg-[#ffff] flex items-center px-[32px] justify-between dark:bg-black dark:text-white">
      <div className="container flex ">
        <LogoButton />
      </div>
      <div className=" md:flex hidden justify-center items-center gap-6 dark:text-white">
        <HeadTitel text="About" />
        <HeadTitel text="Work" />
        <HeadTitel text="Testimonials" />
        <HeadTitel text="Contact" />
        <div className="w-[2px] h-[24px] bg-[#F3F4F6]"></div>
        <Hand />
        <ButtonDowload ButtonDowload="Download CV" />
      </div>
      <div className="block md:hidden">
        <div>
          {isOpenMenu ? (
            <div>
              <Shin onClick={handleMenu} />
            </div>
          ) : (
            <button onClick={handleMenu}>
              <Tov />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
