import { Work } from "./svg/Work";

export const The = () => {
  return (
    <div className="container m-auto " id="Work">
      <div className="flex justify-center items-center flex-col mt-10 ml-20 ">
        <Work />
        <div className="w-[576px] h-[480px] bg-[#F3F4F6] drop-shadow-lg rounded-l-md flex md:hidden justify-center items-center  mt-10">
          <img src="./utas.png" />
        </div>
        <div className="container flex justify-center items-center py-10 mb-20 ">
          <div className="md:w-[576px] md:h-[480px] bg-[#F3F4F6] md:drop-shadow-lg rounded-l-md md:flex justify-center  hidden items-center dark:bg-[#374151] ">
            <img src="./utas.png" />
          </div>
          <div className="md:w-[576px] md:h-[480px]  drop-shadow-lg bg-[#ffff] rounded-r-md dark:text-white dark:bg-[#1F2937]">
            <h1 className="text-xl font-bold mt-10 ml-10">UBCab</h1>
            <p className=" text-slate-600 mt-6  ml-10 w-[480px] h-[96px] dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="mt-10 ml-10 md:w-[480px] md:h-[100px]">
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[79px] h-[28px] ml-3">
                React
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px]  ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[112px] h-[28px] ml-3">
                Typescript
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px] ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[120px] h-[28px]  ml-3">
                PostgreSQL
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[119px] h-[28px] mt-5 ml-3">
                Tailwindcss
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[81px] h-[28px] mt-5 ml-3">
                Figma
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[96px] h-[28px] mt-5 ml-3">
                Cypress
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[110px] h-[28px] mt-5  ml-3">
                Storybook
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[60px] h-[28px] mt-5 ml-3">
                Git
              </button>
            </div>
            <img src="./zvv.png" className="mt-10 ml-10" />
          </div>
        </div>

        <div className="w-[576px] h-[500px] bg-[#F3F4F6] md:hidden flex  drop-shadow-lg rounded-r-md items-center justify-center">
          <img src="./uta.png" />
        </div>
        <div className="container flex justify-center items-center  ">
          <div className="md:w-[576px] md:h-[500px]  drop-shadow-lg bg-[#ffff]  rounded-l-md dark:text-white dark:bg-[#1F2937]">
            <h1 className="text-xl font-bold mt-10 ml-10">Mentorhub</h1>
            <p className="text-slate-600 mt-6 ml-10 w-[480px] h-[96px] dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="mt-5 ml-10 w-[480px] h-[100px]">
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[79px] h-[28px] ml-3">
                React
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px]  ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[112px] h-[28px] ml-3">
                Typescript
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px] ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[120px] h-[28px]  ml-3">
                PostgreSQL
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[119px] h-[28px] mt-5 ml-3">
                Tailwindcss
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[81px] h-[28px] mt-5 ml-3">
                Figma
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[96px] h-[28px] mt-5 ml-3">
                Cypress
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[110px] h-[28px] mt-5  ml-3">
                Storybook
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[60px] h-[28px] mt-5 ml-3">
                Git
              </button>
            </div>
            <img src="./zvv.png" className="mt-10 ml-10" />
          </div>
          <div className="w-[576px] h-[500px] bg-[#F3F4F6] drop-shadow-lg rounded-r-md md:flex hidden items-center justify-center dark:bg-[#374151]">
            <img src="./uta.png" />
          </div>
        </div>

        <div className="md:w-[576px] md:h-[480px] bg-[#F3F4F6] drop-shadow-lg rounded-l-md md:hidden flex items-center justify-centerdark:bg-[#374151] mt-10">
          <img src="./utas.png" />
        </div>
        <div className="container flex justify-center items-center py-10">
          <div className="md:w-[576px] md:h-[480px] bg-[#F3F4F6] drop-shadow-lg rounded-l-md hidden md:flex items-center justify-center ">
            <img src="./utas.png" />
          </div>
          <div className="md:w-[576px] md:h-[480px]  drop-shadow-lg  bg-[#ffff] rounded-r-md dark:text-white dark:bg-[#1F2937]">
            <h1 className="text-xl font-bold mt-10 ml-10">iTiom</h1>
            <p className=" text-slate-600 mt-6 ml-10 w-[480px] h-[96px] dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <div className="mt-10 ml-10 w-[480px] h-[100px]">
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[79px] h-[28px] ml-3">
                React
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px]  ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[112px] h-[28px] ml-3">
                Typescript
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[87px] h-[28px] ml-3">
                Next.js
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[120px] h-[28px]  ml-3">
                PostgreSQL
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center  w-[119px] h-[28px] mt-5 ml-3">
                Tailwindcss
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[81px] h-[28px] mt-5 ml-3">
                Figma
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[96px] h-[28px] mt-5 ml-3">
                Cypress
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[110px] h-[28px] mt-5  ml-3">
                Storybook
              </button>
              <button className="rounded-xl text-color bg-slate-200  text-slate-600 text-center w-[60px] h-[28px] mt-5 ml-3">
                Git
              </button>
            </div>
            <img src="./zvv.png" className="mt-10 ml-10" />
          </div>
        </div>
      </div>
    </div>
  );
};
