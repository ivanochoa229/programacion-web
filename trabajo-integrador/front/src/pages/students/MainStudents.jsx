import { useNavigate } from 'react-router-dom';
import { PageContent } from '../../components/PageContent';
import { useEffect, useState } from 'react';
import {
  findAll,
  deleteStudent,
  lengthStudent,
} from '../../service/studentsService';
import './students.css';
export const MainStudents = () => {
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [valueInputSearch, setValueInputSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [valueSizePagination, setValueSizePagination] = useState(5);
  const [studentLength, setStudentLength] = useState(0);

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/add-student');
  };

  const handleOnClickCloseSession = () => {
    sessionStorage.removeItem("token");
    navigate('/login')
  }

  const handleDelete = async (sid, firstname, lastname) => {
    if (
      window.confirm(
        `Desea eliminar al Estudiante: ${sid} - ${firstname} ${lastname}`
      )
    ) {
      const isDeleted = await deleteStudent(sid);
      if (!isDeleted) {
        console.error('Error al eliminar el estudiante');
      } else {
        setRefresh(true);
      }
    }
  };

  const handleOnSearch = async () => {
    if (valueInputSearch) {
      const newStudents = await findAll(
        valueInputSearch,
        1,
        valueSizePagination
      );
      if (newStudents.length === 0) {
        window.alert(
          `No se encuentra ningun alumno cargado con el apellido ${valueInputSearch}`
        );
        handleReset();
      } else {
        setStudents(newStudents);
        setStudentLength(newStudents.length);
      }
    }
  };

  const handleReset = () => {
    setValueInputSearch('');
    setCurrentPage(1);
    setRefresh(true);
  };

  const handleChangeSize = (Size) => {
    setValueSizePagination(Number(Size));
    setCurrentPage(1);
  };

  useEffect(() => {
    const getStudents = async () => {
      const result = await findAll(
        valueInputSearch,
        Number(currentPage),
        Number(valueSizePagination)
      );
      const length = await lengthStudent();
      setStudents(result);
      setStudentLength(length);
      setRefresh(false);
    };
    getStudents();
  }, [refresh, currentPage, valueSizePagination]);

  return (
    <>
      <PageContent
        headerTitle='Alumnos'
        actions={[
          <button key='add' onClick={handleOnClick} className='add-button'>
            Agregar
          </button>,
          <button key='log-out' onClick={handleOnClickCloseSession} className='add-button close-session-button'>
          Cerrar Sesión
        </button>
        ]}
      >
        <div>
          <section className='search-section'>
            <input
              type='text'
              placeholder='Buscar por apellido'
              value={valueInputSearch}
              onChange={(e) => setValueInputSearch(e.target.value)}
              onClick={handleReset}
            />
            <button
              type='submit'
              className='add-button'
              onClick={() => handleOnSearch()}
            >
              Buscar
            </button>
          </section>
          <table className='table-students'>
            <thead className='table-head'>
              <tr className='table-row'>
                <th>Legajo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr className='table-row' key={s.sid}>
                  <td>{s.sid}</td>
                  <td>{s.firstname}</td>
                  <td>{s.lastname}</td>
                  <td className='td-back-button'>
                    <button
                      className='back-button'
                      onClick={() => handleDelete(s.sid, s.firstname, s.lastname)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='container-nav'>
            <label htmlFor='numero-items'>
              Total: {studentLength} - Items por página
            </label>
            <select
              className='select-option'
              name='numero-items'
              id='number-items'
              value={valueSizePagination}
              onChange={(e) => handleChangeSize(e.target.value)}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
            </select>
            <nav>
              <ul className='nav-bar'>
                {Array.from(
                  { length: Math.ceil(studentLength / valueSizePagination) },
                  (_, index) => (
                    <li key={index + 1} className='nav-item'>
                      {currentPage === index + 1 ? (
                        <button
                          className='div-nav add-button'
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      ) : (
                        <button
                          className='div-nav add-button not-active-button'
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      )}
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </PageContent>
    </>
  );
};
