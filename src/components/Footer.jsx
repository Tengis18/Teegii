import {
  TypescriptIcon,
  SassScssIcon,
  WindIcon,
  FigmaIcon,
  CypressIcon,
  StorybookIcon,
  GitIcon,
} from "./svg/TypescriptIcon ";
import {
  ExpressIcon,
  JavascriptIcon,
  RactIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  ScoketIcon,
  DypescriptIcon,
} from "./svg/JavascriptIcon";
import { SkillBox } from "./SkillBox";

export const Footer = () => {
  return (
    <div className=" container m-auto py-28" id="Footer">
      <div className="container   ">
        <div className="container flex justify-center items-center">
          <button className=" bg-slate-100 dark:bg-slate-400  rounded-xl text-color text-slate-600 text-center w-[105px] h-[28px] dark:text-white">
            Skills
          </button>
        </div>
        <p className="flex justify-center text-slate-600 mt-10 dark:text-white">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-center gap-16  md:w-[1216px] md:h-[100px] py-5 ml-20 mt-10 dark:text-white">
          <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />
          <SkillBox iconComponent={<DypescriptIcon />} text={"Typescrip"} />
          <SkillBox iconComponent={<RactIcon />} text={" React"} />
          <SkillBox iconComponent={<NextIcon />} text={" Next.js"} />
          <SkillBox iconComponent={<NodeIcon />} text={"Node.js"} />
          <SkillBox iconComponent={<ExpressIcon />} text={"Express.js"} />
          <SkillBox iconComponent={<NestIcon />} text={"Nest.js"} />
          <SkillBox iconComponent={<ScoketIcon />} text={"Scoket.js"} />

          <div>
            <img src="./Zaan.png" className="w-[62px] h-[64px]" />
            <p className="mt-2 -ml-1">PostgreSQL</p>
          </div>
          <SkillBox iconComponent={<TypescriptIcon />} text={"MongoDB"} />
          <SkillBox iconComponent={<SassScssIcon />} text={"Sass/Scss"} />
          <SkillBox iconComponent={<WindIcon />} text={"Tailwind"} />
          <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
          <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
          <SkillBox iconComponent={<StorybookIcon />} text={"Storybook"} />
          <SkillBox iconComponent={<GitIcon />} text={"Git"} />
        </div>
      </div>
    </div>
  );
};
