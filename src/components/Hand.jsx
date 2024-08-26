import { useState } from "react";
import { MoonIcon, SunIcon } from "./svg";
export const Hand = () => {
  const [dark, setDark] = useState(false);
  const hand = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="text-black bg-white dark:bg-[#030712] dark:text-white">
      {dark ? (
        <button onClick={hand}>
          <MoonIcon />
        </button>
      ) : (
        <button onClick={hand}>
          <SunIcon />
        </button>
      )}
    </div>
  );
};
