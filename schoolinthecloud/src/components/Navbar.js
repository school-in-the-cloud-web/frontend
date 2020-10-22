import React from "react";
import { Link, useHistory } from "react-router-dom";
function Navbar(props) {
  const { push } = useHistory();
  return (
    <div className="nav">
      {props.isLoggedIn && (
        <>
          <Link
            className="links"
            to={
              props.role === "admin"
                ? "/admin-dashboard"
                : props.role === "student"
                ? "/student-dashboard"
                : props.role === "volunteer"
                ? "/volunteer-dashboard"
                : ""
            }
          >
            DASHBOARD
          </Link>
          <a
            className="links"
            href=""
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("loggedIn");
              props.logOut();
              push("/signin");
            }}
          >
            LOG OUT
          </a>
        </>
      )}
      {!props.isLoggedIn && (
        <>
          <Link className="links" to="/signin">
            LOG IN
          </Link>
          <Link className="links" to="/signup">
            SIGN UP
          </Link>
          <Link className="links" to="/">
            HOME
          </Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
