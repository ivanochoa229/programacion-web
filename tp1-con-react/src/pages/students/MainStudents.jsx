import './students.css'
export const MainStudents = () => {
    return(
        <>
        <table className="table-students">
            <thead className='table-head'>
                <tr className='table-row'>
                    <th>Legajo</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
        </table>
        </>
    )
}