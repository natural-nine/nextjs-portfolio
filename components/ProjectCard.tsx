import { IProjects } from "@/types";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { stagger, variants } from "@/animation";

const ProjectCard = ({ data, setShowDetail, showDetail }: IProjects) => {

  return (
    <div>
      <Image
        src={data.imgPath}
        alt={data.name}
        className="cursor-pointer"
        onClick={() => setShowDetail(data.id)}
        layout="responsive"
        height={150}
        width={300}
      />
      <p className="my-2 text-center">{data.name}</p>

      {showDetail === data.id && (
        <div className="absolute top-0 left-0 z-50 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:bg-dark-200 dark:text-gray-100 md:grid-cols-2 gap-x-12 ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="border-4 border-gray-100 "
              variants={variants}
            >
              <Image
                src={data.imgPath}
                alt={data.name}
                layout="responsive"
                width={300}
                height={150}
              />
            </motion.div>
            <motion.div
              variants={variants}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={data.githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
              >
                <FaGithub /> <span>Github</span>
              </a>
              <a
                href={data.deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-dark-500"
              >
                <FaGithub /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={variants}>
            <motion.h2
              variants={variants}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {data.name}
            </motion.h2>
            <motion.h3 variants={variants} className="mb-3 font-medium">
              {data.description}
            </motion.h3>
            <motion.div
              variants={variants}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {data.keyTechs.map((tech: any) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-500 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={15} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
