import Image from 'next/image'
import img1 from '@public/images/about.jpg'
import '@style/about.css'
import { GiDart, GiBodyBalance,GiPlanetCore } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'
import { GiWeightScale, GiWeightLiftingUp } from 'react-icons/gi'
import { MdOutlineHotelClass } from 'react-icons/md'


export const metadata = {
  title: 'About-Power Gym Addis',
  description: 'Power Gym Addis is a premier fitness facility located in Addis Ababa, Ethiopia  that opened in 1996 E.C.',
}
export default function About() {
  return (
    <>
      <section>
        <div className="container__flex full__container__full about__hero">
        <div className="h1__container">
        <div className="title__header__center Aboutpage">
                <span className="top">ABOUT POWER GYM</span>
                <h1>Welcome To Power</h1>
              </div>
              </div>
        </div>
      </section>

      <section>

        <div className='container flex about__container'>

          <div className="about__text__container left">
            <div className="title__header About">
              <span className="top">ABOUT POWER GYM</span>
              <h2>Welcome To Power</h2>
            </div>

            <p>Power Gym Addis is a premier fitness facility located in Addis Ababa, Ethiopia  that opened in 1996 E.C. We provide a wide range of equipment, classes, and, personal training options to help our members achieve their health and fitness goals.</p>

            <p>Our team includes certified personal trainers, group fitness instructors, and dedicated support staff. We pride ourselves on providing outstanding customer service and motivating members to reach their full potential. Our personal trainers develop customized workout plans that are tailored to each individual's fitness level and goals.</p>

            <p>The gym floor is clean, spacious, and filled with natural light. We provide top-quality equipment, amenities like towels and lockers, and a variety of membership options. Members will also appreciate the convenient hours, accessible location, and motivating atmosphere.</p>
          </div>

          <div className="about__video__container right">
            <Image src={img1}
              alt="Power Gym Addis"
              loading='lazy'
              placeholder="blur"
              fill={true}
              className='img'
            />
          </div>
        </div>
      </section>

      <section className='dark-section'>
        <div className="container ">
          <div className="cards">
            <div className="card">
              <GiDart className='icon' />
              <h3>Mission</h3>
              <p>The mission of Power Gym  is to provide an inclusive, supportive, and results driven environment where people of all fitness levels can thrive.</p>
            </div>


            <div className="card">
              <GiBodyBalance className='icon' />
              <h3>Vision</h3>
              <p>Our vision is a fitter, stronger membership  achieving their peak potential. we envision our member confidently crushing goals, uplifting each other, and becoming the ultimate versions of themselves.</p>
            </div>

            <div className="card">
              <CgGym className='icon' />
              <h3>Value</h3>
              <p className='list'>
                These core values serve as a compass, guiding our operations and interactions, and helping us create a positive and empowering fitness community for our members. We are motivated to achieve excellence in personalized community innovation.</p>
            </div>

          </div>
        </div>
      </section>

      <section className='dark-section '>
      
        <div className="container service__container">
          <div className="title__header__center About">
              <span className="top">OUR SERVICE</span>
              <h2>SERVICE</h2>
            </div>
            <p>Power Gym Addis is a comprehensive fitness center that offers a wide range of services to help you achieve your fitness goals. Whether you're looking to lose weight, build muscle, or simply improve your overall health and well-being, Power Gym Addis has something to offer everyone.A full range of strength training equipment like free cables and weight machines, Treadmill, Dumbbell,Rawing Machine ellipticals, Pullup bars, kettles  bells Personal Training Nutrition Consults</p>


          <div className="cards flex">
          <div className="card">

            <GiWeightScale className='icon service__icon' />
              <h3>Weight Lose</h3>
              <p>Power Gym Addis has a variety of programs and services to help you reach your goals. The gym's experienced personal trainers can help you create a personalized weight loss plan that is tailored to your individual needs and goals.</p>
          </div>


          <div className="card">
            <GiWeightLiftingUp className='icon service__icon' />
              <h3>Body Building</h3>
              <p>Power Gym Addis has everything you need to reach your goals. The gym has a wide range of weight machines and free weights, as well as a qualified staff of personal trainers who can help you create a personalized bodybuilding program.</p>

          </div>

          <div className="card">
            <MdOutlineHotelClass className='icon service__icon' color="white" />
              <h3>Other Special Class</h3>
              <p>Power Gym Addis also offers a variety of other special classes, such as yoga, Pilates, and Zumba. These classes are a great way to improve your flexibility, balance, and coordination. They are also a great way to relieve stress and have fun.</p>

          </div>


        </div>
        </div>



      </section>

    </>

  )
}
