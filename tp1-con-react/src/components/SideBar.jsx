import PropTypes from "prop-types";

export const SideBar = ({ setContent }) => {
  return (
    <>
      <div className="sidebar">
        <h2>Trabajo práctico 1</h2>
        <ul>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setContent("module");
              }}
            >
              Pagina Principal
            </a>
          </li>
          <li>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setContent("student-table");
              }}
            >
              Alumnos
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

SideBar.propTypes = {
  setContent: PropTypes.func,
};
