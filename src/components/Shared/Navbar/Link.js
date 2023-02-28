import React from "react";

function Link({ route }) {
  return (
    <li>
      <a href={route.path} onClick={route.handleLogOut}>
        {route.name}
      </a>
    </li>
  );
}

export default Link;
