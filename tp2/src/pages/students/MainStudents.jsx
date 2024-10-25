import { useNavigate } from 'react-router-dom'
import { PageContent } from '../../components/PageContent'
import { useEffect, useState } from 'react'
import { findAll } from '../../service/studentsService'
import './students.css'
export const MainStudents = () => {

    const [students, setStudents] = useState([]);
    
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/add-student');
    }

    useEffect(() => {
        const getStudents = async () => {
                const result = await findAll();
                setStudents(result);
        }
        getStudents();
    }, [])


    return(
        <>
        <PageContent 
            headerTitle = 'Alumnos'
            actions={[
                <button key='add' onClick={handleOnClick} className="add-button">Agregar</button>
            ]}
            >
        <div>
            <section className='search-section'>
                <input type="text" placeholder='Buscar por apellido'/>
                <button type="submit" className='add-button'>Buscar</button>
            </section>
            <table className="table-students">
                <thead className='table-head'>
                    <tr className='table-row'>
                        <th>Legajo</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                { students.map(s => (
                    <tr className='table-row' key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.lastname}</td>
                        <td className='td-back-button'><button className='back-button'>Borrar</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="container-nav">
                <label htmlFor="numero-items">Total: {students.length+1} - Items por página</label>
                <select className= 'select-option' name="numero-items" id="number-items">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                <nav>
                  <ul className="nav-bar">
                    <li className="nav-item">
                        <button className="div-nav add-button">
                            1
                        </button>
                        <button className="div-nav add-button">
                            2
                        </button>
                        <button className="div-nav add-button">
                            3
                        </button>
                    </li>
                  </ul>
                </nav>
              </div>
        </div>
        </PageContent>
        </>
    )
}