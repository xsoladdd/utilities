import { useTheme } from "next-themes";
import React from "react";
import { isDarkmode } from "../../../helper/isDarkmode";
import Switch from "../../../ui/switch/Switch";
import DarkmodeSwitcher from "./DarkmodeSwitcher";
import NavLink from "./NavLink";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <>
      <header className="text-gray-600 body-font border-b-2 border-b-gray-100 dark:border-b-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">Link 2</NavLink>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-primary-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl dark:text-gray-100">Utilities</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <DarkmodeSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
