import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import CategoryNews from '../Pages/CategoryNews'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import NewsDetails from '../Pages/NewsDetails'
import Career from '../Pages/Career'
import About from '../Pages/About'
import Error from '../Pages/Error'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <PrivateRoute><CategoryNews></CategoryNews></PrivateRoute>,
                // loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ],
    },
    {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/career",
        element: <Career></Career>
    },
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
                {
                    
                path: "/auth/register",
                element: <Register></Register>
                
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }

])

export default router