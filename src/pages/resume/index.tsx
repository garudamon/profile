import ExperienceItem, {
  ExperienceItemProps,
} from "@/components/ExperienceItem";
import Tag from "@/components/Tag";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ResumePage = () => {
  const skill = [
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Next.js",
    "React Native",
    "Pinia",
    "Vuex",
    "Redux",
    "Zustand",
    "Overmind",
  ];
  const experiences = [
    {
      company: "Mintox",
      path: "/images/mintoxlogo.png",
      title: "Senior Software Engineer – Frontend",
      responsibility: [
        "Convert mockup into real web interface",
        "UI / Frontend staff hub for the team",
        "Helping the full-stack engineer to build the feature",
      ],
      stack: ["Vue.js", "Vuex", "SCSS"],
      year: "Sep 2021 – Present",
      location: "Remote (HQ. Perth, WA)",
    },
    {
      company: "Kano Solution",
      path: "/images/kanologo.png",
      title: "Senior Software Engineer – Frontend",
      responsibility: [
        "Working as a front-end engineer ",
        "Sharing knowledge to a colleague ",
        "Led frontend team under a lead engineer and project manager",
      ],
      stack: [
        "React Native",
        "Overmind",
        "TypeScript",
        "React Native Paper",
        "Vue",
        "Vuex",
        "Vuetify",
      ],
      year: "Apr 2020 – Sep 2021 ",
      location: "Remote (HQ. Surabaya, ID)",
    },
    {
      company: "EACIIT Big Data Solution",
      path: "/images/eaciitlogo.png",
      title: "Senior Software Engineer – Frontend",
      responsibility: [
        "Handle front-end stuff in Roadmap Team ",
        "Research and Development, make a new tool for the development team ",
        "Optimizing web user interface performance ",
        "Develop mobile apps with React Native ",
        "Give some advice to front-end development ",
        "Sharing knowledge related to front-end",
        "Part of Center of Excellent Team",
      ],
      stack: ["Vue", "Vuex", "Vuetify"],
      year: "Sep 2018 – Mar 2020 ",
      location: "Remote (HQ. Surabaya, ID)",
    },
    {
      company: "LOKET",
      path: "/images/loketlogo.png",
      title: "Software Engineer – Frontend",
      responsibility: [
        "Handle front-end stuff, adding new features, and maintenance.",
        "Working on LOKET Self Service – LOKET.com (Vue.js, Blade)",
        "Working on LOKET Themepark, GO-LIVE starter pack (jQuery)",
        "Working on LOKET Mini Site for Enterprise Event (HTML, CSS, jQuery)",
        "Being a part of the GO-JEK family, I also help GOTIX Team to maintenance GOTIX CMS (React)",
      ],
      stack: ["Vue.js", "jQuery", "React.js", "Laravel", "Amazon S3"],
      year: "Feb 2018 - Sep 2018 ",
      location: "Jakarta, ID",
    },
    {
      company: "Zahir",
      path: "/images/zahirlogo.png",
      title: "Senior Web Developer",
      responsibility: [
        "Core engineer for SaaS accounting (new product: Zahir Online) in RnD Team. ",
        "Build, maintenance REST API with Codeigniter / Slim framework. ",
        "Transform design into interactive front-end with Ext.js or Vue.js. ",
        "Dev-ops (Setup SaaS env with AWS EC2, RDS, and ELB). ",
      ],
      stack: [
        "PHP",
        "Javascript",
        "jQuery",
        "Ext.js",
        "Vue.js",
        "MySQL",
        "Firebird",
        "Nginx",
        "AWS (EC2, RDS, ELB)",
      ],
      year: "Jul 2012 - Nov 2017",
      location: "Yogyakarta, ID",
    },
  ];
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
              <a href="https://github.com/garudamon" target="_blank" className="dark:invert">
                <Icon
                  icon="devicon:github"
                  width={30}
                  className="opacity-60 hover:opacity-100"
                ></Icon>
              </a>
              <a href="https://www.linkedin.com/in/aliimron/ " target="_blank">
                <Icon
                  icon="skill-icons:linkedin"
                  width={30}
                  className="opacity-60 hover:opacity-100"
                ></Icon>
              </a>
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
