import { useNavigate } from 'react-router-dom'


const PrivateRoute = ({ children }) => {
    const jwt = localStorage.getItem("JWT")
    const navigate = useNavigate();
    return jwt ? children : navigate("/home")
}

export default PrivateRoute