import { SkillBox } from "@/components/Box";
import {
  JavascriptIcon,
  ReactIcon,
  TypescriptIcon,
} from "@/components/icons/icons";

export default function Home() {
  return (
    <div className="flex gap-3">
      <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />
      <SkillBox iconComponent={<TypescriptIcon />} text={"Typescript"} />
      <SkillBox iconComponent={<ReactIcon />} text={"React"} />
    </div>
  );
}

//Props
//Destructure
//
