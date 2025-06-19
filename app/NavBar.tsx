
import React from "react";
import Link from "next/link";
import { PiFileSqlFill } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";

const NavBar = () => {

  return (
    <nav className="relative flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">Abhiloans</Link>
      <ul>
        <li><Link href="dashboard"><MdDashboard /></Link></li>
        <li ><Link href="query"><PiFileSqlFill /></Link></li>
      </ul>
      {}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">
        DASHBOARD
      </div>
    </nav>


  );
};

export default NavBar;
