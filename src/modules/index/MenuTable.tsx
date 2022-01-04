import Link from "next/link";
import React from "react";
import { tableStructureType } from "./types";

interface MenuTableProps {}

const MenuTable: React.FC<MenuTableProps> = ({}) => {
  const mainMenu: tableStructureType[] = [
    {
      desc: "Convert Array to Tailwind JSON Color Template",
      link: "/tailwind-color-converter",
      title: "Tailwind Color Converter",
    },
  ];

  return (
    <>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="rounded-lg text-sm font-medium text-gray-900 text-left">
            <th className="px-4 py-2 bg-gray-200 dark:bg-gray-50 ">Title</th>
            <th className="px-4 py-2 bg-gray-200 dark:bg-gray-50">
              Description
            </th>
            <th className="px-4 py-2 bg-gray-200 dark:bg-gray-50">Link</th>
          </tr>
        </thead>

        <tbody className="text-sm font-normal text-gray-700 dark:text-gray-200 dark:bg-gray-800">
          {mainMenu.map(({ title, link, desc }, idx) => {
            return (
              <tr className="  border-gray-200" key={idx}>
                <td className="px-4 py-4">{title}</td>
                <td className="px-4 py-4">{desc}</td>
                <td className="px-4 py-4">
                  <Link href={link}>
                    <a href="" className="text-blue-500">
                      {link}
                    </a>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default MenuTable;
