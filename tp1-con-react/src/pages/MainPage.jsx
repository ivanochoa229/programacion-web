import './mainPage.css';
import { PageContent } from '../components/PageContent';
import { useNavigate } from 'react-router-dom';
export const MainPage = () => {
  const navigate = useNavigate();

  const HandleOnClick = () => {
    navigate('/');
  };

  return (
    <>
      <PageContent  headerTitle='Página Principal'>
        <div  className='main-page' onClick={HandleOnClick}>
          <h2>Módulo Alumnos</h2>
        </div>
      </PageContent>
    </>
  );
};
