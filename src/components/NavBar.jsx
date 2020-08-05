import React, { useState, useEffect } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuidditch,
  faHatWizard,
  faMagic,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [page, setPage] = useState("/");

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const location = useLocation();

  useEffect(() => {
    changePage(location.pathname);
  });

  const quidditch = <FontAwesomeIcon icon={faQuidditch} />;
  const wizardHat = <FontAwesomeIcon icon={faHatWizard} />;
  const magic = <FontAwesomeIcon icon={faMagic} />;
  const bolt = <FontAwesomeIcon icon={faBolt} />;

  const navStyle = {
    textDecoration: "none",
  };

  return (
    <nav className="nav_div">
      <ul className="nav_ul">
        <Link style={navStyle} className="nav_link" to="admin_signup">
          <li
            className="nav_li"
            style={{
              color: page == "/admin_signup" && "white",
              textDecoration: page == "/admin_signup" && "underline",
            }}
          >
            Admin Sign Up {magic}
          </li>
        </Link>
        <Link style={navStyle} className="nav_link" to="admin_login">
          <li
            className="nav_li"
            style={{
              color: page == "/admin_login" && "white",
              textDecoration: page == "/admin_login" && "underline",
            }}
          >
            Admin Login {wizardHat}
          </li>
        </Link>
        <Link style={navStyle} className="nav_link" to="add_student">
          <li
            className="nav_li"
            style={{
              color: page == "/add_student" && "white",
              textDecoration: page == "/add_student" && "underline",
            }}
          >
            Add Student {quidditch}
          </li>
        </Link>
        <Link style={navStyle} className="nav_link" to="/main">
          <li
            className="nav_li"
            style={{
              color: page == "/main" && "white",
              textDecoration: page == "/main" && "underline",
            }}
          >
            Main {bolt}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default withRouter(NavBar);
