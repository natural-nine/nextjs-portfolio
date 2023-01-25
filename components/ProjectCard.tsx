import { IProjects } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdClose } from "react-icons/md";
const ProjectCard = ({ data }: IProjects) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div>
      <Image
        src={data.imgPath}
        alt={data.name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      <p className="my-2 text-center">{data.name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-md md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <Image
              src={data.imgPath}
              alt={data.name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={data.githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaGithub /> <span>Github</span>
              </a>
              <a
                href={data.deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <FaGithub /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">
              {data.name}
            </h2>
            <h3 className="mb-3 font-medium">{data.description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {data.keyTechs.map((tech: any) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
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
