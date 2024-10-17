import PropTypes from "prop-types";

export const StudentForm = ({setContent}) => {
  return (
    <>
      <div className="title-form">
        <h2>Agregar Alumnos</h2>
        <button
          className="back-button button"
          onClick={(e) => {
            e.preventDefault;
            setContent("student-table");
          }}
        >
          Atrás
        </button>
      </div>
      <hr/>
      <section className="cards-form">
        <form className="alumn-form" id="form">
          <label htmlFor="name" className="label">Nombre:</label>
          <input type="text" name="name" id="name" className="input"/>
          <div id="nameError" className="error"></div>
          <label htmlFor="lastname" className="label">Apellido:</label>
          <input type="text" name="lastname" id="lastname" className="input"/>
          <div id="lastnameError" className="error"></div>
          <button className="add-student-button button" type="submit">
            Agregar
          </button>
        </form>
      </section>
    </>
  );
};
StudentForm.propTypes = {
  setContent:PropTypes.func.isRequired
}