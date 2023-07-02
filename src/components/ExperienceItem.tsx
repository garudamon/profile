import Tag from "@/components/Tag";
import Image from "next/image";
import { Icon } from "@iconify/react";

export type ExperienceItemProps = {
  company: string;
  path: string;
  title: string;
  responsibility: string[];
  stack: string[];
  year: string;
  location: string;
};

const ExperienceItem = (props: ExperienceItemProps) => {
  return (
    <div className="flex gap-3 items-start mb-6">
      <div className="logo">
        <Image src={props.path} width={40} height={40} alt={`${props.company} Logo`} className="rounded-lg" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <div className="company-info">
            <div className="font-semibold text-lg">{props.title}</div>
            <div className="flex gap-5 items-center text-slate-500 text-xs">
              <div className="flex gap-1 items-center">
                <Icon icon={"mdi:briefcase-outline"} height={16} />
                <span>{props.company}</span>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon={"carbon:location"} height={16} />
                <span>{props.location}</span>
              </div>
            </div>
          </div>
          <div className="employment flex flex-col items-end text-xs">
            <Tag text="Full Time" />
            <div className="flex gap-1 items-center">
              <Icon icon={"solar:calendar-linear"} height={16} />
              <span className="text-slate-500">{props.year}</span>
            </div>
          </div>
        </div>

        <div className="text-sm pt-3 text-slate-500 dark:text-white">
          <p className="capitalize">responsibility:</p>
          <ul className="list-disc ml-5">
            {props.responsibility.map((v: string, id: number) => (
              <li key={id}>{v}</li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2 flex-col sm:flex-row">
            <span className="capitalize pt-1">stack:</span>
            <div className="inline-flex gap-1 flex-wrap">
              {props.stack.map((v: string, id: number) => (
                <Tag text={v} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
