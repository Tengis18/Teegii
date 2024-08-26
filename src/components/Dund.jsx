import { ReactIcon } from "./svg/ReactIcon";
export const Dund = () => {
  return (
    <div className="w-screen max-w-[1200px]  m-auto lg:py-20 mt-24 px-32 flex items-center flex-col">
      <ReactIcon />
      <div className="container  ">
        <div className="md:w-[896px] md:h-[200px] rounded-lg bg-[#ffff]  mt-10 drop-shadow-lg dark:bg-[#1F2937] dark:text-white">
          <div className="md:w-[896px] md:h-[150px] gap-48px ml-10 py-5 flex justify-center items-center">
            <img
              src="./Up.png"
              className="w-[101px] h-[28px] flex justify-center"
            />
            <div className="container flex flex-col items-center ">
              <p className="text-2xl">Sr. Frontend Developer</p>
              <ul className="text-slate-500 mt-5 list-disc dark:text-white ">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Ut pretium arcu et massa semper, id fringilla leo semper.
                </li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
            <h1 className=" text-slate-600 dark:text-white">
              Nov 2021 - Present
            </h1>
          </div>
        </div>
        <div className="md:w-[896px] md:h-[220px] rounded-lg bg-[#ffff]  mt-10 drop-shadow-lg dark:bg-[#1F2937] dark:text-white ">
          <div className="md:w-[896px] md:h-[150px] gap-48px  py-5 flex">
            <img
              src="./Up.png"
              className="w-[101px] h-[28px] flex justify-center ml-10"
            />
            <div className="md:w-[384px] md:h-[224px] flex flex-col items-center">
              <p className="text-2xl">Team Lead</p>
              <ul className="text-slate-500 mt-5 list-disc dark:text-white ">
                <li>Sed quis justo ac magna.</li>npx
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Sed quis justo ac magna.</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <h1 className="ml-12 text-slate-600 dark:text-white ">
              Jul 2017 - Oct 2021
            </h1>
          </div>
        </div>
        <div className="md:w-[896px] md:h-[200px] rounded-lg bg-[#ffff] mt-10 drop-shadow-lg dark:bg-[#1F2937] dark:text-white">
          <div className="cmd:w-[896px] md:h-[150px] gap-48px  py-5  flex">
            <img src="./Up.png" className=":w-[101px] h-[28px] ml-10" />
            <div className="container flex flex-col items-center">
              <p className="text-2xl dark:text-white ">Full Stack Developer</p>
              <ul className="text-slate-500 mt-5 list-disc  dark:text-white ">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
            <h1 className="ml-12 text-slate-600 dark:text-white ">
              Dec 2015 - May 2017
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
