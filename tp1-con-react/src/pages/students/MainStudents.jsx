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
                <button key='add' onClick={handleOnClick}>Agregar</button>
            ]}
            >
        <table className="table-students">
            <thead className='table-head'>
                <tr className='table-row'>
                    <th>Legajo</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
               { students.map(s => (
                <tr className='table-row' key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.lastname}</td>
                </tr>
               ))}
            </tbody>
        </table>
        </PageContent>
        </>
    )
}