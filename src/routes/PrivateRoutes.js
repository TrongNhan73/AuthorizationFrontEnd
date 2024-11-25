import { useEffect, useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
const PrivateRoutes = (prop) => {
    const { dataUser } = useContext(userContext);

    let navigate = useNavigate();
    if (dataUser && dataUser.isAuthenticated === false) { console.log(dataUser); return <Navigate to="/login" replace /> }
    else {
        return <Outlet />
    }

}
export default PrivateRoutes;