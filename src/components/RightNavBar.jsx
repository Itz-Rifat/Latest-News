import twitter from '../assets/twitter.png'
import facebook from "../assets/fb.png"

const RightNavBar = () => {
  return (
    <div>
      <div className='mb-4'>
        <p>Login With</p>
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
        <p>Find Us on</p>
      </div>
    </div>
  )
}

export default RightNavBar