import { useTheme } from "next-themes";
import React from "react";
import { isDarkmode } from "../../helper/isDarkmode";
import Switch from "../../ui/Switch/Switch";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  // const [darkMode, setDarkMode] = useState(true);

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl dark:text-white">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 hover:dark:text-gray-300 dark:text-white">
              First Link
            </a>
            <Switch
              status={isDarkmode(theme)}
              onClick={() =>
                isDarkmode(theme) ? setTheme("light") : setTheme("dark")
              }
            />
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
