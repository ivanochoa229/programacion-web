import { useNavigate } from "react-router-dom";

export const ModuleStudents = () => {
    const navigate = useNavigate();

    const HandleOnClick = () => {
        navigate('/');
    }

    return (
    <div className='main-page' onClick={HandleOnClick}>
      <h2>Módulo Alumnos</h2>
    </div>
  );
};
