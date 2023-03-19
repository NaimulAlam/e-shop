import React from "react";
import { Link } from "react-router-dom";

function NavLinks({ route }) {
  return (
    <Link
      to={route.path}
      onClick={route.handleLogOut}
      className={route.className}
    >
      {route.name}
    </Link>
  );
}

export default NavLinks;
