import { Outlet } from "react-router-dom"


const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Outlet></Outlet>
    </div>
  )
}

export default AuthLayout