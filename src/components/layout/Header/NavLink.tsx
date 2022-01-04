import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={`mr-5 hover:text-gray-900 dark:text-gray-100 ${
          href === asPath ? `text-gray-900 font-bold` : ``
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
export default NavLink;
