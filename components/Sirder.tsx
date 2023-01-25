import { useTheme } from "next-themes";
import { FaGithub, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";

const Sider = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div>
      <img
        src="/song.webp"
        alt="avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-5 text-3xl font-medium tracking-wider">
        <span>송완준</span>
      </h3>
      <p className="justify-center px-3 py-2 my-5 bg-gray-200 rounded-full dark:bg-dark-200">
        Front-end, React.js / Next.js
      </p>
      <a
        className="flex items-center justify-center px-3 py-2 my-5 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <FaFileDownload className="w-4.5 h-4.5 space-x-1 opacity-50 mr-1 mb-1" />
        이력서
      </a>
      <div className="flex justify-center w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/natural-nine">
          <FaGithub className="w-8 h-8 cursor-pointer dark:text-white" />
        </a>
      </div>
      <div
        className="py-3 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-1">
          <FaMapMarkerAlt className="mb-1" />
          <span>서울</span>
        </div>
        <p className="my-2">wan.jun.bruce@gmail.com</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-3 text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400"
        onClick={() => {
          window.open("mailto:wan.jun.bruce@gmail.com");
        }}
      >
        이메일 보내기
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
      >
        모드
      </button>
    </div>
  );
};

export default Sider;
