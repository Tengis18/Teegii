import { Head, Footer, Header, Hero, Dund, End, The, EEnd } from "@/components";

export default function Home() {
  return (
    <div className="dark:bg-black flex flex-col justify-center items-center">
      <div>
        <Head />
        <Header />
        <div className=" dark:bg-[#111827] dark:text-white">
          <Hero />
        </div>
        <Footer />
        <div className=" dark:bg-[#111827] dark:text-white">
          <Dund />
        </div>
        <The />
        <End />
        <div className=" dark:bg-[#111827] dark:text-white">
          <EEnd />
        </div>
      </div>
    </div>
  );
}
