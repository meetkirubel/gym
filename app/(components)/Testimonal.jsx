"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"
const Testimonial = () => {
  return (
     <section className="dark-section">
        <div className="container">
             <div className="title__header__center Testimonial">
                <span className="top">Our Testimonials</span>
                <h2>What Clients say</h2>
              </div>
              <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}  
                breakpoints={{
                        700: {
                          slidesPerView: 2,
                        },
                        1100: {
                            slidesPerView: 3,
                          }
                      }}          
                pagination={{
                dynamicBullets: true,
                clickable: true
                    }}
                modules={[Pagination]}
                className="mySwiper"
      >

        <SwiperSlide className='testimonal__cards'>
            <div className="card__container flex">
            <div className="text">
                <h2>Anbessa Shabazz</h2>
                <span>Client</span>
                <p>"Very good gym , amazing staff & very clean. I've trained in gyms in Canada / the USA and Power Gym is no different from those gyms in the said countries. Showers are lit too. Will definitely train there again when I go home :)"
                </p>
                <ul className="list flex">
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>

                </ul>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='testimonal__cards'>
            <div className="card__container flex">
            <div className="text">
                <h2>nick landreth</h2>
                <span>Client</span>
                <p>"Just went to Power Gym for the first time. They had great equipment. What is more it was a great environment. There were several experienced people there that helped me and my friends optimize our workouts. Very happy to have chosen this Gym for the time I will be in Addis."
                </p>
                <ul className="list flex">
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                        <li><BsStarFill /></li>
                </ul>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='testimonal__cards'>
            <div className="card__container flex">
            <div className="text">
                <h2>Abiy Zewde</h2>
                <span>Client</span>
                <p>"I used to work out Power gym for years and it is a place to be. All the employees are very friendly, they treat you like a a closed family. The aver all package suits the name."
                </p>
                <ul className="list flex">
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                </ul>
            </div>
            </div>
        </SwiperSlide>


        <SwiperSlide className='testimonal__cards'>
            <div className="card__container flex">
            <div className="text">
                <h2>Dawit Shiferaw</h2>
                <span>Client</span>
                <p>"Good gym with good equipment steam and sauna available and at a very affordable price compared to other comparable  gyms in the city"
                </p>
                <ul className="list flex">
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>

                </ul>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='testimonal__cards'>
            <div className="card__container flex">
            <div className="text">
                <h2>Michael Abebe</h2>
                <span>Client</span>
                <p>"It's nice place to work out owner and all employs are very nice"
                </p>
                <ul className="list flex">
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>
                        <li><BsStarFill/></li>

                </ul>
            </div>
            </div>
        </SwiperSlide>



      </Swiper>
        </div>
     </section>
  )
}

export default Testimonial