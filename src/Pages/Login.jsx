import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="-mt-20 min-h-screen justify-center items-center flex" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="pt-4 justify-center flex text-3xl font-bold">Login your account</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input " placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="justify-center flex">Don't have An Account ? <Link className="link link-hover px-1.5 text-red-500" to="/auth/register">Register</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Login