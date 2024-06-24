/* import { Outlet, Navigate} from "react-router-dom";

const ProtectedRoutes = () => {
    const user = null
    return user ? <Outlet/> : <Navigate to="/Authentic" />
}

export default ProtectedRoutes; */
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const ProtectedRoutes = () => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to="/Authentic" />;
};

export default ProtectedRoutes;
