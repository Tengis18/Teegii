import { Personicon, SerchIcon, ShopIcon } from "./svg";
export const Header = () => {
  return (
    <main>
      <Personicon />
      <SerchIcon />
      <ShopIcon />
      <div className="container m-auto py-4  dark:text-white">
        <div className=" container flex justify-between md:px-24 px-8 mt-10 gap-11 ">
          <div className="">
            <img src="./tom.png" className="flex md:hidden md:ml-80 " />
            <div className="md:w-[600px] md:h-[360px] dark:text-white ">
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
