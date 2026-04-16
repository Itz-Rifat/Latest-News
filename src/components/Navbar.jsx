import { Link } from "react-router-dom"
import User from '../assets/user.png'



const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-3 justify-between items-center">
                <img src={User} alt="" />
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    )
}

export default Navbar