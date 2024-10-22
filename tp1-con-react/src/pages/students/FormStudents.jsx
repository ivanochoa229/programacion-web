export const FormStudents = () => {
  return (
    <>
      <form className='alumn-form' id='form'>
        <label htmlFor='name'>Nombre:</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='lastname'>Apellido:</label>
        <input type='text' name='lastname' id='lastname' />
        <button className='add-student-button' type='submit'>
          Agregar
        </button>
      </form>
    </>
  );
};
