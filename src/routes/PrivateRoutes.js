import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = (prop) => {
    let authen = '';
    authen = sessionStorage.getItem('account');


    console.log(authen);
    if (Boolean(authen)) {
        return <Outlet />
    } else {
        return <Navigate to={'/login'} />
    }
}
export default PrivateRoutes;