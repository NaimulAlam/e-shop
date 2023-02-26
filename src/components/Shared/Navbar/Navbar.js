import React from "react";
import UserIImg from "../../../Asset/images/her2.jpg";
import Link from "./Link";
import NavCart from "./NavCart";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const MainRoutes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Shop", path: "/shop" },
    { id: 3, name: "Company", path: "/company" },
    { id: 4, name: "Men", path: "/men" },
    { id: 5, name: "Women", path: "/women" },
  ];

  const UserRoutes = [
    { id: 1, name: "Profile", path: "/profile" },
    { id: 2, name: "Settings", path: "/settings" },
    { id: 3, name: "Logout", path: "/#logout" },
  ];

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
            <Bars3Icon className="h-6 w-6 text-slate-900" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MainRoutes.map((route) => (
              <Link key={route.id} route={route}></Link>
            ))}
            <li>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={UserIImg} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="ml-[-5rem] bg-base-200 rounded-box w-32"
              >
                {UserRoutes.map((route) => (
                  <Link key={route.id} route={route}></Link>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          E-Shop
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {MainRoutes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="dropdown dropdown-end">
          <NavCart></NavCart>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={UserIImg} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {UserRoutes.map((route) => (
              <Link key={route.id} route={route}></Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end lg:hidden md:flex">
        <NavCart></NavCart>
      </div>
    </div>
  );
};

export default Navbar;
