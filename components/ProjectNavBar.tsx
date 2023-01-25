import { Category } from "@/types";
import ProjectNavItem from "./ProjectNavItem";

const ProjectNavBar = ({
  filterCategory,
  active,
}: {
  filterCategory: (category: Category | "all") => void;
  active: string;
}) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <ProjectNavItem value="all" filterCategory={filterCategory} active={active}/>
      <ProjectNavItem value="react" filterCategory={filterCategory} active={active}/>
      <ProjectNavItem value="next" filterCategory={filterCategory} active={active}/>
    </div>
  );
};

export default ProjectNavBar;
