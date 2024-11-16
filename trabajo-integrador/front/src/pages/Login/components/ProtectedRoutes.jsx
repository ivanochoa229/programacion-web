import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "./AuthProvider";
import PropTypes from 'prop-types';

const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
    isAuthenticated: PropTypes.bool,
    redirectPath: PropTypes.string
}