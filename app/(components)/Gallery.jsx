"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'
import img1 from '@public/gallery/1.jpg'
import img2 from '@public/gallery/2.jpg'
import img3 from '@public/gallery/3.jpg'
import img4 from '@public/gallery/4.jpg'
import img5 from '@public/gallery/5.jpg'
import img6 from '@public/gallery/6.jpg'
import img7 from '@public/gallery/7.jpg'
import img8 from '@public/gallery/8.jpg'
import img9 from '@public/gallery/9.jpg'
import img10 from '@public/gallery/10.jpg'
import img11 from '@public/gallery/11.jpg'
import img12 from '@public/gallery/12.jpg'


const Gallery = () => {
    const imgs =[img7,img2,img8,img4,img11,img5,img6,img9,img1,img10,img3,img12];
  return (
     <section className="dark-section">
        <div className=".full__container">
            <div className="gallerys__container">
              <Swiper
                breakpoints={{
                        700: {
                          slidesPerView: 4,
                        },
                        1100: {
                            slidesPerView:4,
                          }
                      }} 
                      loop={true}         
                      navigation={true}
                modules={[Navigation]}
                className="mySwiper swiper-container"
      >

        
            {imgs.map((item,id)=>{
                return (
                    <SwiperSlide className='galley__cards' key={id}>
                        <Image src={item}
                        className='img'
                         alt="Power Gym Addis"
                         loading='lazy'
                         placeholder="blur"
                         />
                    </SwiperSlide>
                )
            })}
      
        
      </Swiper>
      </div>
        </div>
     </section>
  )
}

export default Gallery