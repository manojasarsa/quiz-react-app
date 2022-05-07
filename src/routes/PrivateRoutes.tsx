// import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

type PrivateRoutesTypes = {
      children: React.ReactNode
}

const PrivateRoutes = ({children}: PrivateRoutesTypes) => {
    // const { state } = useAuth();

    // return state.isAuth ? children : <Navigate to="/login" replace />;
}

export {PrivateRoutes};