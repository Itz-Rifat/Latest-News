
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <div className='grid justify-center text-red-500'>
            <button className='hover:link'><NavLink to={`/`}>Home</NavLink></button>
            <h1 className='flex justify-center' >This is Error Page</h1>

        </div>
    )
}

export default Error