import { Link } from "react-router"
import { useSelector } from 'react-redux'

const Navigator = () =>{
    const usuario = useSelector((state) => state.loginFormData.loginFormData)
    //const username ="sdfds"
    return(
        <nav className="navbar">
            <Link to="/" className="nav-link">Landing Page</Link>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <label className="formulario">{usuario.username} - </label>
            <label className="formulario">{usuario.email} </label>
            <Link to="/logout">
                <button type="button">Logout</button>
            </Link>
        </nav>
    );
}

export default Navigator