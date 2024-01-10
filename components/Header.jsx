'use client'
import Image from 'next/image'
import {IoClose} from 'react-icons/io5'
import {HiMenu} from 'react-icons/hi'
import "@style/nav.css"
import Logo from "@public/logo/logo.svg"
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { useState } from 'react'
const Header = () => {
    const path = usePathname();
    const links = [
        {'href':'/','lable':'Home'},
        {'href':'/about','lable':'About'},
        {'href':'/price','lable':'Price'},
    ]
    const [nav,setNav] =useState(false)
  return (
    <header className={nav?"overflow-x-visible":"overflow-x-hidden"}>
        <div className="nav__container">
        <Link href='/'>
        <Image
        className='logo'
        src={Logo}
        />
        </Link>
        <nav onClick={()=>{setNav(false)}}>
            <ul className={nav? ' nav__links nav__links__active' :  'nav__links'}>
               {links.map((item)=>{ return(<li className={`nav__link ${item.href === path && 'active'}`}><Link href={item.href}>{item.lable}</Link></li>)})}
               <li className={`nav__link mobile ${"/contact" === path && 'active'}`}><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div className="desktop btn bg-yellow-500 hover:bg-yellow-400 font-bold py-2 px-4 rounded nav__btn"><Link href='/contact' className=''>Contact</Link></div>
        <div className="mobile">
          <HiMenu className={nav? 'icons': 'icons active'} onClick={()=>{setNav(true)}}/>
          <IoClose className={nav? 'icons active': 'icons'} onClick={()=>{setNav(false)}}/>
        </div>
        </div>
    </header>
  )
}

export default Header