import PropTypes from "prop-types";
import './mainPage.css'
import { useLocation, useNavigate } from "react-router-dom";
export const MainPage = ({title, content, isActive}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnClick = () => {
    if(location.pathname === '/students') {
      navigate('/add-students');
    }else{
      navigate('/students');
    }
  }

  return (

    <>
      <header className="header">
        <div className="header-title">
          <h2>{title}</h2>
        </div>
        <div className="header-button">
        {
          isActive && (
            <button onClick={handleOnClick}>
              {location.pathname === '/students' ? 'Agregar' : 'Volver'}
            </button>
          )
        }
        </div>
      </header>
      <hr/>
      {content }
      
    </>
  );
};

MainPage.propTypes = {
  title:PropTypes.string,
  content:PropTypes.object,
  isActive:PropTypes.bool
}