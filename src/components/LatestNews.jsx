import { Link } from 'react-router-dom';


const LatestNews = () => {
    return (
        <div className='bg-base-200 flex gap-2 justify-center items-center px-2'>
            <div className=' text-white px-2 bg-red-700 py-1'>
                <p>Latest</p>
            </div>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt.</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt.</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt.</Link>
            <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sunt.</Link>
           


        </div>
    )
}

export default LatestNews