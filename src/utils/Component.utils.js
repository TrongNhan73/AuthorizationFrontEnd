import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, authentication }) => {
    return authentication ? children : <Navigate to={'/login'} />
}
export {
    PrivateRoute
}