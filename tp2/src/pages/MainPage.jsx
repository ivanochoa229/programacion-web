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
      <PageContent headerTitle='Página Principal'>
        <div className='main-page' onClick={HandleOnClick}>
          <h1>Módulo Alumnos</h1>
        </div>
      </PageContent>
    </>
  );
};
