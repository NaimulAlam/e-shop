import React from "react";
import { Link } from "react-router-dom";

function NavItems({ route }) {
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

export default NavItems;
