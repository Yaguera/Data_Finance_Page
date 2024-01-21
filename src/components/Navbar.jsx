import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <header  className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><a href="">Home</a></li>
        <li className='p-4'><a href="">Company</a> </li>
        <li className='p-4'><a href="">Resources</a> </li>   
        <li className='p-4'><a href="">About</a> </li>
        <li className='p-4'><a href="">Contact</a> </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed md:hidden top-0 w-[60vw]  bg-[#000300] ease-in-out duration-500 transform translate-x-[-10px] h-screen' : 'fixed md:hidden h-screen top-0 w-[60vw] bg-[#000300] ease-in-out duration-500 transform -translate-x-[120%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-b-gray-600'><a href="">Home</a></li>
          <li className='p-4 border-b border-b-gray-600'><a href="">Company</a></li>
          <li className='p-4 border-b border-b-gray-600'><a href="">Resources</a></li>   
          <li className='p-4 border-b border-b-gray-600'><a href="">About</a></li>
          <li className='p-4 border-b border-b-gray-600'><a href="">Contact</a></li>
        </ul>
      </div>





    </header>
  )
}

export default Navbar
