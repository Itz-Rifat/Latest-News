import twitter from '../assets/twitter.png'
import facebook from "../assets/fb.png"

const RightNavBar = () => {
  return (
    // <div className='lg:ml-20 mt-3'>
    //   <div className='mb-4 '>
    //     <p className='lg:ml-25 font-semibold'>Login With</p>
    //     // Remove: lg:ml-20, lg:ml-25 classes
    <div className='mt-3'>  {/* Simplified */}
      <div className='mb-4'>
        <p className='font-semibold'>Login With</p>
        {/* buttons */}
        <div>
          <button className='btn bg-gray-200 my-2 w-full' ><img src={facebook} alt="" />
            <p>Login with facebook</p>
          </button>
        </div>
        <div>

          <button className='btn bg-gray-200 w-full' ><img src={twitter} alt="" />
            <p>Login with twitter</p>
          </button>
        </div>
      </div>
      <div>
        <p className='lg:ml-25 font-semibold'>Find Us on</p>
      </div>
    </div>
  )
}

export default RightNavBar