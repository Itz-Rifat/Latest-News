import { Link, useNavigate } from "react-router-dom"
import User from '../assets/user.png'
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
                
                navigate("/auth/login")

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="flex justify-between items-center">
            <div>
                {user && user.displayName && (
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{user.displayName}</span>
                        <span className="text-sm text-gray-600">{user.email}</span>
                    </div>
                )}
            </div>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>

            { 
            user && user?.email?(
            <div className="flex gap-3 justify-between items-center">
            <img src={User} className="rounded-full" alt="" />
            <button onClick={handleLogOut} className="btn btn-neutral rounded-none">Log Out</button>
            </div>
            )
                            : 
            (<div className="flex gap-3 justify-between items-center">
                <img src={User} className="rounded-full" alt="" />
                <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
            </div> ) 
            }
        </div>
    )
}

export default Navbar