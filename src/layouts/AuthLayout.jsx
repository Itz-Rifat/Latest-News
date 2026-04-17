import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Login from "../Pages/Login"
import Register from "../Pages/Register"


const AuthLayout = () => {
  return (
    <div className="bg-gray-200">
        <header className='w-11/12 mx-auto p-5'>
            <Navbar></Navbar>
        </header>

        <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout