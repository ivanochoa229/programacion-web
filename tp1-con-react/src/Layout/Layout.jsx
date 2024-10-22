import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";
export const Layout = () => {
  return (
    <>
      <div className="layout-root">
        <div className="layout-sidebar">
          <h2>Trabajo práctico 1<br/>con React</h2>
          <nav>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "menu-selected" : ""
                  }
                >
                  Página Principal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"students"}
                  className={({ isActive }) =>
                    isActive ? "menu-selected" : ""
                  }
                >
                  Alumnos
                </NavLink>
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
