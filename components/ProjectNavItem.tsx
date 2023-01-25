import { Category } from "@/types";

const ProjectNavItem = ({
  value,
  filterCategory,
  active,
}: {
  value: Category | "all";
  filterCategory: (category: Category | "all") => void;
  active: string;
}) => {
  return (
    <li
      onClick={() => filterCategory(value)}
      className="capitalize cursor-pointer hover:text-green-300"
    >
      {value}
    </li>
  );
};

export default ProjectNavItem;
