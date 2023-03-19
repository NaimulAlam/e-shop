import React, { useContext } from "react";
import UserIImg from "../../../Asset/images/her2.jpg";
import NavLinks from "./NavLinks";
import NavCart from "./NavCart";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.eroor(error);
      });
  };

  const MainRoutes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Shop", path: "/shop" },
    { id: 3, name: "Orders", path: "/orders-review" },
    // conditional user details
    !user?.email
      ? { id: 6, name: "Sign-up", path: "/sign-up" }
      : { id: 7, name: `Welcome ${user?.email}!`, path: "#" },
  ];

  const UserRoutes = [
    { id: 1, name: "Profile", path: "/profile" },
    { id: 2, name: "Settings", path: "/settings" },
    // conditionally show the links optional chainning with user? for email important
    !user?.email
      ? {}
      : {
          id: 5,
          name: "Logout",
          path: "/",
          className: "btn btn-sm btn-outline btn-error rounded-md my-2 p-0",
          handleLogOut,
        },
  ];

  return (
    <div className="navbar bg-base-100 sticky top-0 z-40 bg-opacity-70 border-b border-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className="h-6 w-6 text-slate-900" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {MainRoutes.map((route) => (
                <NavLinks
                  key={route.id}
                  route={route}
                  className={route.className}
                ></NavLinks>
              ))}
            </li>
            <li>
              {user?.email ? (
                <>
                  <label
                    tabIndex={0}
                    className="avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={UserIImg} alt="" />
                    </div>
                  </label>
                  <ul tabIndex={0} className="ml-[-5rem] p-4 bg-base-200 w-32">
                    {UserRoutes.map((route) => (
                      <NavLinks key={route.id} route={route}></NavLinks>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-sm btn-outline btn-success"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl">
          E-Shop
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {MainRoutes.map((route) => (
              <NavLinks
                key={route.id}
                route={route}
                className={route.className}
              ></NavLinks>
            ))}
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="dropdown dropdown-end">
          <NavCart></NavCart>
        </div>
        <div className="dropdown dropdown-end">
          {user?.email ? (
            <>
              <label tabIndex={0} className="avatar mx-2">
                <div className="w-12 rounded-full">
                  <img src={UserIImg} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {UserRoutes.map((route) => (
                  <NavLinks key={route.id} route={route}></NavLinks>
                ))}
              </ul>
            </>
          ) : (
            <Link to="/login" className="btn btn-md btn-outline btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
      <div className="navbar-end lg:hidden md:flex">
        <NavCart></NavCart>
      </div>
    </div>
  );
};

export default Navbar;
