export const End = () => {
  return (
    <main>
      <div className="container m-auto ls:px-10 ls:py-32">
        <div className="container  flex items-center flex-col">
          <div className="container  ml-8">
            <div className="container  flex justify-center">
              <button className="bg-slate-200 rounded-xl text-color text-slate-600 text-center w-[122px] h-[28px] ">
                Get in touch
              </button>
            </div>
            <div className="container mt-5 flex justify-center">
              <p className="w-[576px] h-[56px]  text-color text-slate-600 text-center dark:text-white">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </p>
            </div>
          </div>
          <div className="container mt-10 flex items-center  flex-col">
            <div className="md:w-[436px] md:h-[44px]  flex justify-center ">
              <img
                src="./mail.png"
                className="md:w-[30px] md:h-[30px] mt-1 dark:text-white "
              />
              <h1 className="text-3xl ml-4 font-bold dark:text-white">
                tom@pinecone.mn
              </h1>
              <img
                src="./davhar.png"
                className="md:w-[40px] md:h-[40px] ml-4  "
              />
            </div>
            <div className="container  flex justify-center ">
              <img
                src="./phone.png"
                className="md:w-[30px] hmd:-[30px] mt-1 "
              />
              <h1 className="text-3xl ml-4 font-bold dark:text-white">
                +976 88112233
              </h1>
              <img
                src="./davhar.png"
                className="md:w-[40px] md:h-[40px] ml-4  "
              />
            </div>
          </div>
          <div className="container md:mt-10 flex items-center  flex-col">
            <div className="md:w-[312px] md:h-[69px] gap-8">
              <p className="text-slate-600 dark:text-white">
                You may also find me on these platforms!
              </p>
              <div className="md:w-[312px] md:h-[36px] flex justify-center  mt-3">
                <img src="./muur.png" />
                <img src="./shuvuu.png" />
                <img src="./medhgui.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
