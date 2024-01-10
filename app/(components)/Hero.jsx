'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '@public/images/hero.jpg'
import hero2 from '@public/images/hero1.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='hero'>
        
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper hero__container"
      >
         <SwiperSlide className="hero__image hero__image2">
        <Image
            priority
            src={hero2}
            alt='Power Gym Addis'
            fill
            objectFit='cover'
            />
                  <div className="h1__container">
        <div className="title__header__center">
                <span className="top">POWER GYM ADDIS</span>
                <h1>Welcome to Power</h1>
              </div>
              </div>

        </SwiperSlide>

        <SwiperSlide className="hero__image hero__image1">

        <Image
            priority
            src={hero1}
            alt='Power Gym Addis'
            fill
            objectFit='cover'
            />
                  <div className="h1__container">
        <div className="title__header__center">
                <span className="top">POWER GYM ADDIS</span>
                <h1>Where fitness meets community</h1>
              </div>
              </div>

      </SwiperSlide>
         
      </Swiper>
    </section>
  )
}

export default Hero