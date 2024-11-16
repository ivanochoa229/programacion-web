import './mainPage.css';
import { PageContent } from '../components/PageContent';
import { useNavigate } from 'react-router-dom';
export const MainPage = () => {
  const navigate = useNavigate();

  const HandleOnClick = () => {
    navigate('/');
  };
  
  const handleOnClickCloseSession = () => {
    sessionStorage.removeItem("token");
    navigate('/login')
  }

  return (
    <>
      <PageContent headerTitle='Página Principal'
      actions={
        [
          <button key='add' onClick={handleOnClickCloseSession} className='add-button close-session-button'>
          Cerrar Sesión
        </button>
        ]
      }
      >
        <div className='main-page' onClick={HandleOnClick}>
          <h1>Módulo Alumnos</h1>
        </div>
      </PageContent>
    </>
  );
};
