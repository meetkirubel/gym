import Image from 'next/image'
import React from 'react'
import logo from '@public/logo/logo.svg'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube, FaLocationDot } from 'react-icons/fa'
import { MdLocationPin,MdEmail,MdPhone} from 'react-icons/md'
const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <footer className='lite-section'>
                <Image
                src={logo}
                alt="Power Gym Addis Logo"
                width="75"
                height="79.5"
                className='logo'
            />
        <div className="top__footer">
            <div className="other">
            <h3>Power Gym Addis</h3>
            <div className="social__link">
            <a href="https://www.instagram.com/powergym_addis/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>

            <a href="https://www.facebook.com/powergymaddis/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>

            <a href="https://www.youtube.com/@PowerGymAddis" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>

            <a href="https://t.me/powergymdave" target="_blank" rel="noopener noreferrer"><FaTelegramPlane/></a>
            </div>
            </div>
        </div>
            <div className="social">
            
            </div>
        <ul className="middle__footer">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/price'>Price</Link></li>
            <li><Link href='/ourtrainer'>OurTrainer</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ul>
        <div className="bottom__footer">
                <span>©{ year}Power Entertainment Addis.</span>
                <Link href="https://devkira.vercel.app"><span>Powerd By MeetKirubel.</span></Link>
        </div>
    </footer>
  )
}

export default Footer