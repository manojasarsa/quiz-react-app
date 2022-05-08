// import { useAuth } from "../contexts/authContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../utils/authMethods";

const PrivateRoutes = () => {

    const location = useLocation();

    const { 
        authState: {
            userInfo: { token }
        } 
    } = useAuth();

    return token ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />;
}

export {PrivateRoutes};