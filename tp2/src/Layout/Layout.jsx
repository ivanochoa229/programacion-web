import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./layout.css";
export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <div className="layout-root">
        <div className="layout-sidebar">
          <h2 className="title-sidebar">Trabajo práctico 2</h2>
          <nav>
            <ul>
              <li className={location.pathname === "/" ? "menu-selected" : ""}>
                <NavLink to={"/"}>Página Principal</NavLink>
              </li>
              <li
                className={
                  location.pathname === "/students" || location.pathname ===  '/add-student'? "menu-selected" : ""
                }
              >
                <NavLink to={"/students"}>Alumnos</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="layout-main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
