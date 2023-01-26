import ProjectCard from "@/components/ProjectCard";
import ProjectNavBar from "@/components/ProjectNavBar";
import { projects } from "@/data";
import { Category, IProjectsTypes } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";
import { routeAni, stagger } from "@/animation";
import { GetStaticProps } from "next";
import axios from "axios";

interface IPro {
  projects: IProjectsTypes;
}

const Projects = () => {
  // console.log(projects.projects);
  const [project, setProject] = useState(projects);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const filterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProject(projects);
      setActive(category);
      return;
    }
    const newArray = projects.filter((project:IProjectsTypes) =>
      project.category.includes(category)
    );
    setProject(newArray);
    setActive(category);
  };
  return (
    <motion.div
      variants={routeAni}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectNavBar filterCategory={filterCategory} active={active} />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {project.map((data: IProjectsTypes, idx: number) => (
          <div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            // variants={variants}
            key={idx}
          >
            <ProjectCard
              data={data}
              key={idx}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export const getStaticProps = async (context: GetStaticProps) => {
  const { data } = await axios.get("http://localhost:3000/api/projects");
  // console.log(data);
  return {
    props: {
      projects: data,
    },
  };
};

export default Projects;
