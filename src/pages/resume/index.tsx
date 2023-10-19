import ExperienceItem, {
  ExperienceItemProps,
} from "@/components/ExperienceItem";
import Tag from "@/components/Tag";
import { experiences, skill } from "@/data/resume";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ResumePage = () => {
  
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full !text-sm">
        <div className="flex flex-col gap-5">
          <header className="resume card">
            <div className="h-24 bg-teal-700"></div>
            <div className="relative" style={{ height: 40 }}>
              <Image
                src={"/images/avatar.jpeg"}
                width={80}
                height={80}
                alt="Avatar"
                className="absolute left-1/2 z-10 -translate-x-1/2 rounded-md border-2 dark:border-teal-700"
                style={{ top: "-40px" }}
              ></Image>
            </div>
            <div className="text-xl pt-5 px-5">Muhammad Ali Imron</div>
            <div className="text-sm px-5 pb-5 text-slate-500">
              Frontend Engineer
            </div>
            <div className="flex gap-3 p-5 pt-0">
              <Link href="https://github.com/garudamon" target="_blank">
                <Icon
                  icon="devicon:github"
                  width={30}
                  className="opacity-60 hover:opacity-100 dark:invert"
                ></Icon>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aliimron/ "
                target="_blank"
              >
                <Icon
                  icon="skill-icons:linkedin"
                  width={30}
                  className="opacity-60 hover:opacity-100"
                ></Icon>
              </Link>
              <Link href="mailto:hi@aliimron.com">
                <Icon
                  icon="iconoir:mail"
                  width={30}
                  className="opacity-60 hover:opacity-100"
                ></Icon>
              </Link>
            </div>
          </header>
          <div className="resume card p-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="font-semibold">Location</div>
            <div className="text-slate-500 sm:col-span-2">
              Mojokerto, Indonesia
            </div>
            <div className="font-semibold">Experience</div>
            <div className="text-slate-500 sm:col-span-2">10+ years</div>
            <div className="font-semibold">Relocation</div>
            <div className="text-slate-500 sm:col-span-2">Negotiable</div>
          </div>
          <div className="resume card p-5 flex flex-wrap gap-2">
            {skill.map((v: string) => (
              <Tag text={v} key={v} />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <div className="resume card p-5 hidden">
            <div className="text-xl">About me</div>
            <div className="text-slate-500"></div>
          </div>
          <div className="resume card p-5">
            <div className="text-xl">Experiences</div>
            <div className="experiences-list py-5">
              {experiences.map((exp: ExperienceItemProps, id) => (
                <ExperienceItem key={id} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
