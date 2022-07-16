import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const hyperlink = links.map((linking) => (
    <a key={linking} href={"#" + linking}>
      {linking}
    </a>
  ));

  return <nav>{hyperlink}</nav>
}

export default NavBar;
