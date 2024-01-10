import Image from 'next/image'
import React from 'react'
import bgImg from '@public/images/service.jpg'
import {GiWeightScale,GiWeightLiftingUp} from 'react-icons/gi'
import {MdOutlineHotelClass} from 'react-icons/md'
const Service = () => {
  return (
   
    <section className="section" >
        <div className="container__flex full__container__full ">
        <div className="left  lite-section service__left">
                    <Image
                        src={bgImg}
                        alt="Power Gym Addis"
                        fill={true}
                        loading='lazy'
                        placeholder="blur"
                     />
         </div>

            <div className="right service__right">

            <div className="title__header Service">
            <span className="top">OUR OFFERS</span>
            <h2>Service</h2>
          </div>

          <div className="services">
                <div className="service__box">
                
                    <GiWeightScale className='icon' style={{fontSize:'80px'}} />
                    
                    <div className="text">
                        <h3>Weight Lose</h3>
                        <p>Power Gym Addis has a variety of programs and services to help you reach your goals. The gym's experienced personal trainers can help you create a personalized weight loss plan that is tailored to your individual needs and goals.</p>
                    </div>
                </div>

                
                <div className="service__box">
                    <GiWeightLiftingUp className='icon' style={{fontSize:'80px'}}/>
                    <div className="text">
                        <h3>Body Building</h3>
                        <p>Power Gym Addis has everything you need to reach your goals. The gym has a wide range of weight machines and free weights, as well as a qualified staff of personal trainers who can help you create a personalized bodybuilding program.</p>
                    </div>
                </div>

                <div className="service__box">
                <MdOutlineHotelClass className='icon' style={{fontSize:'80px'}} />
                    <div className="text">
                        <h3>Other Special Class</h3>
                        <p>Power Gym Addis also offers a variety of other special classes, such as yoga, Pilates, and Zumba. These classes are a great way to improve your flexibility, balance, and coordination. They are also a great way to relieve stress and have fun.</p>
                    </div>
                </div>


          </div>
            </div>
        </div>
    </section>

  )
}

export default Service