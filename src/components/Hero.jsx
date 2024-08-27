import { EmailIcon } from "./svg/EmailIcon";
export const Hero = () => {
  return (
    <main className="bg-[#F9FAFB] w-[screen]  dark:bg-[#111827] dark:text-white"id="Hero">
      <div className=" max-w-[1440px]  m-auto py-28 ">
        <EmailIcon />
        <div className="container ">
          <div className="md:ml-20   flex justify-center ">
            <p className=" bg-slate-200 rounded-xl text-color text-slate-500 text-center w-[105px] dark:bg-slate-400  dark:text-white h-[28px]">
              About me
            </p>
          </div>
          <div className="md:flex mt-10 container ">
            <div className="md:w-[584px] md:h-[558px]  md:ml-24 ml-5">
              <img src="./big.png" />
            </div>
            <div className="  md:w-[584px] md:h-[558px] ml-10 dark:text-white ">
              <h1 className="text-2xl font-bold">
                Curious about me? Here you have it:
              </h1>
              <p className="text-slate-500 mt-5 dark:text-white">
                i'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p className="text-slate-500 mt-5 dark:text-white">
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p className="text-slate-500 mt-5 dark:text-white">
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p className="text-slate-500 mt-5 dark:text-white">
                Finally, some quick bits about me.
              </p>
              <ul className="text-slate-500 mt-5 list-disc flex  space-x-10 dark:text-white">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>

                <li>Avid learner</li>
              </ul>
              <p className="text-slate-500 mt-5 dark:text-white">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
