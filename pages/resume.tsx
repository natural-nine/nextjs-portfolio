import ResumeBar from "@/components/ResumeBar";
import { languages, tools } from "@/data";
import { ISkillTpyes } from "@/types";

const resume = () => {
  return (
    <div className="px-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">교육</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">부캠</h5>
            <p className="font-semibold">dkdkdkdksksk</p>
            <p className="my-3 ">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">최종학력</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">대학교 14.03 ~ 18.08</h5>
            <p className="font-semibold">전공:</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((lan: ISkillTpyes) => (
              <ResumeBar data={lan} key={lan.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Libraries</h5>
          <div className="my-2">
            {tools.map((tool: ISkillTpyes) => (
              <ResumeBar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
