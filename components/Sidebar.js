import React from "react";
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] shadow-md fixed h-full">
      <div className="logo">Blog App</div>
      <ul className="menu">
        <li>
          <Link href="/">
            <a> Posts </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
