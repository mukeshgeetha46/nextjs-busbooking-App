import React from 'react'
import './bottomnav.css'
import Image from 'next/image'
import style from '../../styles/header.module.css'

const BottomNav = ({menuItems}) => {
  return (
    <div className='bottomnavbar'>
       <div className='menus'>
    {menuItems.map((item, index) => (
       <div key={index} className='option'>
         <Image src={item.src} alt={item.title} width={30} height={30} />
         <p className='title'>{item.title}</p>
       </div>
     ))}
       
    </div>
    </div>
  )
}

export default BottomNav
