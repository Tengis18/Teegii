import { Personicon, SerchIcon, ShopIcon } from "./svg";
export const Header = () => {
  return (
    <main>
      <Personicon />
      <SerchIcon />
      <ShopIcon />
      <div className="container m-auto py-4  dark:text-white">
        <div className=" container flex justify-between ">
          <div className="">
            <div className="flex md:hidden md:ml-80  pt-10 justify-center items-center">
            <img src="./tom.png"  />
            </div>
            <div className="md:w-[600px] md:h-[360px] dark:text-white mt-20 ml-10">
              <h1 className="text-4xl flex font-bold ">Hi, i'm TENGIS👋</h1>
              <p className="text-gray-500 mt-9 dark:text-white">
                I specialize in full stack development, particularly with
                React.js and Node.js. My main goal is to create exceptional
                digital experiences that are fast, visually appealing, and
                accessible to everyone. With over 7 years of experience in web
                development, I continue to find joy in crafting innovative
                solutions and designs. Ulaanbaatar, Mongolia Available for new
                projects
              </p>
              <p className="flex text-gray-500 mt-5 dark:text-white">
                <img src="./mark.png" />
                Ulaanbaatar, Mongolia
              </p>
              <p className="flex text-gray-500 dark:text-white">
                <img src="./zeg.png" />
                Available for new projects
              </p>
              <div className="flex mt-10">
                <img src="./muur.png" />
                <img src="./shuvuu.png" />
                <img src="./medhgui.png" />
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="./tom.png"
              className="md:flex w-[320px] h-[360px] hidden  "
            />
          </div>
        </div>
      </div>
    </main>
  );
};
