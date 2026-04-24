import { useContext } from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import LeftNavBar from '../components/LeftNavBar'
import Navbar from '../components/Navbar'
import RightNavBar from '../components/RightNavBar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'


const HomeLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header className='mt-2'>
        <Header></Header>
      </header>
      <section className='w-11/12 mx-auto'>
        <LatestNews></LatestNews>
      </section>

      <nav className='w-11/12 mx-auto mt-4'>
        <Navbar></Navbar>
      </nav>

      {/* // OLD: */}
      {/* <main className='w-11/12 mx-auto mt-4 grid lg:grid-cols-12 md:grid-cols-12 gap-2'> */}
      {/* // NEW: */}
      <main className=' w-11/12 mx-auto mt-4 grid sm:grid-cols-3 md:grid-cols-9 lg:grid-cols-12 gap-1 '>
        {/* <aside id='left' className='col-span-3'><LeftNavBar /></aside> */}
        <aside id='left' className='w-full justify-center flex sm:col-span-3 md:col-span-3'><LeftNavBar /></aside>
        {/* <main className='col-span-6'> <Outlet /> </main> */}
        <main className='col-span-1 sm:col-span-3 md:col-span-6 lg:col-span-6'><Outlet /></main>
        {/* <aside id="right" className='hidden lg:block lg:col-span-3'><RightNavBar /></aside> */}
        <aside id='right' className='sm:col-span-3 md:col-span-5 lg:col-span-3'><RightNavBar /></aside>
      </main>
    </div >
  )
}

export default HomeLayout