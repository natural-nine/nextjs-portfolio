import { useTheme } from "next-themes";
import Image from "next/image";
import { FaGithub, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";

const Sider = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="/song.webp"
        width="128"
        height="128"
        alt="avatar"
        className="mx-auto rounded-full"
        // priority
      />
      {/* <img
        src="/song.webp"
        alt="avatar"
        className="w-32 h-32 mx-auto rounded-full"
      /> */}
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
        {theme === "light" ? (
          <div className="flex justify-center">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill={"#9b59b6"}
                d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
              ></path>
            </svg>
          </div>
        ) : (
          <div className="flex justify-center">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill={"#f39c12"}
                d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
              ></path>
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default Sider;
