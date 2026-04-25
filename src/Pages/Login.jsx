import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
  const [error, setError] = useState({});
  const { loginUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        // Signed in 
        const user = result.user;

        setUser(user);
        // clearing previous values
        e.target.reset();

        // Show success toast
        toast.success(`✅ Welcome back, ${user.displayName || 'User'}!`);

        // Redirect to home page immediately
        navigate('/');
      })
      .catch((err) => {
        alert("Login credentials mismatch.")
        setError({ ...error, login: err.code })
        const errorMessage = err.message;
        toast.error("❌ Login failed. Please check your credentials.");
      });


  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-green-200 justify-center  items-center flex" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="pt-4 justify-center flex text-3xl font-bold">Login your account</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit}
            className="form">
            <label className="label pb-1">Email</label>
            <input type="email" name="email" className="input " placeholder="Email" />

            <label className="label pb-1">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" />

            {/* error message */}
            {error.login && <label className="label ">{error.login}</label>}

            <div><a className="link link-hover">Forgot password?</a></div>
            <div className=" this section will be updated later "><button className="btn w-full btn-neutral mt-4">Login</button></div>
          </form>
          <p className="justify-center flex">Don't have An Account ? <Link className="link link-hover px-1.5 text-red-500" to="/auth/register">Register</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login
