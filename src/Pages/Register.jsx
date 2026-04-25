import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { IoAlertCircleSharp } from "react-icons/io5";



const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);
  // const [error, setError] = useState({});
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

    if (!passwordRegex.test(password)) {
      setError([
        <div key="1" className="flex items-center gap-1"><IoAlertCircleSharp /> At least 6 characters.</div>,
        <div key="2" className="flex items-center gap-1"><IoAlertCircleSharp /> One uppercase & one lowercase.</div>,
        <div key="3" className="flex items-center gap-1"><IoAlertCircleSharp /> One number & one special character.</div>
      ]);
      return;
    }

    createNewUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);

        // Update user profile with name and photo
        return updateUserProfile(name, photoURL || null);
      })
      .then(() => {
        // console.log("User registered successfully with profile updated");
        // Reset form on success
        e.target.reset();
        // Show success toast
        toast.success("✅ Account created successfully! Please log in.");
        // Redirect to login page immediately
        navigate('/auth/login');
      })
      .catch((error) => {
        console.error("Registration error:", error.code, error.message);

        if (error.code === 'auth/email-already-in-use') {
          setError("Email already in use.");
        } else {
          setError(error.message || "Registration failed. Please try again.");
        }

        toast.error("❌ Registration failed.");
        e.target.reset();

      });

  };

  return (
    <div className=" min-h-screen bg-gradient-to-tl from-purple-300 to-gray-300 justify-center items-center flex" >
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="pt-4 justify-center flex text-3xl font-bold">Register your account</h1>
        <div className="card-body">
          {error && <div className="alert inline alert-error text-white mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="fieldset">

            <label className="label">Your Name</label>
            <input type="name" name='name' className="input " placeholder="Enter your name" required />

            {/* <label className="label">Photo URL</label>
            <input type="url" name='photo' className="input " placeholder="Photo-url" required /> */}

            <label className="label">Email</label>
            <input type="email" name='email' className="input " placeholder="Enter your email" />

            <label className="label">Password</label>
            <input type="password" name='password' className="input" required placeholder="Enter your password" />

            {/* {
              error && (<div className="text-red-500 text-sm">{error}</div>)
            } */}

            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="justify-center flex">Already have An Account ? <Link className="link link-hover px-1.5 text-blue-500" to="/auth/login">Login</Link></p>
        </div>

      </div>
    </div>
  )
}

export default Register