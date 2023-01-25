import { ISkills } from "@/types";

const ResumeBar = ({ data }: ISkills) => {
  const { Icon, name, level } = data;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-blue-600"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default ResumeBar;
