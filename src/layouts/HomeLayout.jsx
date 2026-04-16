
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import LeftNavBar from '../components/LeftNavBar'
import Navbar from '../components/Navbar'
import RightNavBar from '../components/RightNavBar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
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

      <main className='w-11/12 mx-auto mt-4 grid lg:grid-cols-12 md:grid-cols-12 gap-4'>
        <aside className='col-span-3'><LeftNavBar /></aside>
        <main className='col-span-6'> <Outlet /> </main>
        <aside className='col-span-3'><RightNavBar /></aside>

      </main>
    </div>
  )
}

export default HomeLayout