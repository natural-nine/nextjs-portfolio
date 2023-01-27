import { routeAni, variants } from "@/animation";
import ResumeBar from "@/components/ResumeBar";
import { languages, tools } from "@/data";
import { ISkillTpyes } from "@/types";
import { motion } from "framer-motion";
import Head from "next/head";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="song's resume" />
      </Head>
      <motion.div
        variants={routeAni}
        initial="initial"
        animate="animate"
        exit="exit"
        className="px-6 py-2"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={variants} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">교육</h5>
            <div>
              <h5 className="my-2 text-xl font-bold">
                스파르타코딩클럽 항해99{" "}
              </h5>
              <p className="font-semibold">22.05 ~ 22.08</p>
              <p className="my-3 ">
                항해99 프로그램에서 프론트엔드 (React) 코스를 수료했으며,
                프론트엔드 개발자로 성장하고 있습니다.
              </p>
            </div>
          </motion.div>
          <motion.div variants={variants} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">경력사항</h5>
            <div>
              <h5 className="my-2 text-xl font-bold"></h5>
              <p className="font-semibold"></p>
            </div>
          </motion.div>
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
      </motion.div>
    </>
  );
};

export default Resume;
