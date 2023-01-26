import ProjectCard from "@/components/ProjectCard";
import ProjectNavBar from "@/components/ProjectNavBar";
import { projects } from "@/data";
import { Category, IProjectsTypes } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";
const Projects = () => {
  const [project, setProject] = useState(projects);
  const [active, setActive] = useState("all");
  const filterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProject(projects);
      setActive(category);
      return;
    }
    const newArray = projects.filter(project =>
      project.category.includes(category)
    );
    setProject(newArray);
    setActive(category);
  };
  const variants = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {},
    },
  };
  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  console.log(project);
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
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
            <ProjectCard data={data} key={idx} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
