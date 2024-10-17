import PropTypes from "prop-types";

export const HeaderStudent = ({ setContent }) => {
  return (
    <>
      <div className="header">
        <div className="header-div">
          <h2 className="title-no-top-padding">Alumnos</h2>
        </div>
        <div className="header-div">
          <button
            type="button"
            className="add-button"
            onClick={(e) => {
              e.preventDefault;
              setContent("student-form");
            }}
          >
            Agregar
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

HeaderStudent.propTypes = {
  setContent: PropTypes.func.isRequired,
};
