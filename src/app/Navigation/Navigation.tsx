import Image from 'next/image'
import React from 'react'
const Navigation = () => {
  return (
    <nav className="py-14 text-black text-3xl">
        {/* <div className='flex items-center'> */}
        <div className='flex justify-start w-full items-start'>
            <div className='pl-28'>
                <h3 className='text-dark'>A.G</h3>
            </div>
        {/* </div> */}
      <ul className="flex space-x-4 justify-center items-center w-full">
        <li><a href="#home">About me</a></li>
        <li><a href="#about">Skills</a></li>
        <li><a href="#services">Career</a></li>
        <li><a href="#contact">Education</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
        </div>
       
    </nav>
  )
}

export default Navigation
