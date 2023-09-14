import { Link } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"; 

export const NavBar = () =>{
    const [ cookies, setCookies ] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const handleLogOut = ()=>{
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    };
    return (
        <div className="navbar">
            <Link to="/" className="btn btn-dark" >Home</Link>
            <Link to="/create-recipe" className="btn btn-dark">Create Recipe</Link>
            <Link to="/save-recipe" className="btn btn-dark">Save Recipe</Link>
            {!cookies.access_token ? (<Link to="/auth" className="btn btn-dark">Login / Register</Link>) : (<button onClick={handleLogOut} className="btn btn-dark" >logout</button>)
            }
        </div>
    )

}