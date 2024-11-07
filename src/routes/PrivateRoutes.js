import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const PrivateRoutes = (prop) => {
    let navigat = useNavigate();
    useEffect(() => {
        if (!Boolean(sessionStorage.getItem('account'))) {
            navigat('/login');
        }
    }, [])

    return <Outlet />

}
export default PrivateRoutes;