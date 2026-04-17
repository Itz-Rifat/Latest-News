import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="-mt-20 min-h-screen justify-center items-center flex" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="pt-4 justify-center flex text-3xl font-bold">Register your account</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Your Name</label>
            <input type="name" className="input " placeholder="Enter your name" />
            <label className="label">Photo URL</label>
            <input type="url" className="input " placeholder="Photo-url" />
            <label className="label">Email</label>
            <input type="email" className="input " placeholder="Enter your email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter your password" />
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="justify-center flex">Already have An Account ? <Link className="link link-hover px-1.5 text-blue-500" to="/auth/login">Login</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Register