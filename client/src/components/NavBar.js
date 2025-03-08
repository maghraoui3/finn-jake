/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../logo.png'

function NavBar() {
  return (
    <div className='text-white flex justify-around items-center pt-1 fixed w-screen bg-[#89dc8a]'>
      <img width={'90px'} src={logo} alt="logo" />
      {/* <div></div> */}
      <ul className='flex gap-10'>
        <li><a href='#'>About Finn and Jake</a></li>
        <li><a href='#'>Gallery</a></li>
        <li><a href='#'>Fan Zone</a></li>
        <li><a href='#'>Community</a></li>
        <li><a href='#'>Conclusion</a></li>
      </ul>
    </div>
  )
}

export default NavBar