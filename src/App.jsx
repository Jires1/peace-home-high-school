import { useState } from 'react'

import { createBrowserRouter, RouterProvider, NavLink} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/home/Home'
import Footer from './components/Footer/Footer'
import Discover from './components/Discover/Discover'
import Gallery from './components/Gallery/Gallery'
import SchoolInfo from './components/Infos/SchoolInfos'
import SchoolInfoTech from './components/Infos/SchoolInfoTech'
import ContactForm from './components/Contact/ContactForm'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  }, 
  {
    path:'/Home',
    element: <Home/>,
  }, 
  {
    path:'/Discover', 
    element: <Discover/>
  },
  {
    path: "/Our History",
    element: <Discover/>
  },
  {
    path: "/Gallery",
    element: <Gallery/>
  },
  {
    path: "/Ordinary Secondary Cycle",
    element: <SchoolInfo/>
  },
  {
    path: "/Advance Secondary Cycle",
    element: <SchoolInfo/>
  },{
    path:'/Technical Section',
    element: <SchoolInfoTech/>
  },{
    path:'/Study at P.H.C.H.S',
    element: <div><SchoolInfo/><SchoolInfoTech/></div>
  },{
    path:'/Contact',
    element: <ContactForm/>
  }

])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
