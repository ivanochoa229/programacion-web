import { useNavigate } from "react-router-dom";
import { useAuth } from "./components/AuthProvider";
import "./LoginPage.css";

export const LoginPage = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(); 
    navigate('/'); 
  };

  return (
    <div className="login-content">
      <div className="card-login">
        <form onSubmit={handleOnSubmit}>
          <div className="login-fields">
            <label>Usuario</label>
            <input type="text" placeholder="Ingrese un usuario" />
            <label>Contraseña</label>
            <input type="password" placeholder="Ingrese una contraseña" />
          </div>
          <div className="login-button">
            <button type="submit">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};