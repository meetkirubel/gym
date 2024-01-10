"use client";
import Link from 'next/link';
import ReactPlayer from 'react-player'


const About = () => {
  return (
     <section className="lite-section">
        <div className="container container__flex">
            <div className="left left__about__container">
              <div className="title__header About">
                <span className="top">ABOUT POWER GYM</span>
                <h2>Welcome To Power</h2>
              </div>
              <article>
                <h3>What is the purpose of our company?</h3>
                <p>Power Gym is a premier fitness facility located in Addis Ababa, Ethiopia  that opened in 1996 E.C We provide a wide range of equipment, classes, and, personal training options to help our members achieve their health and fitness goals. <Link className='link' href='/about'> Readmore...</Link></p>
              </article>
            </div>

            <section className="right right__about__container">
             <ReactPlayer
            className=' react-player fixed-bottom player'
            url= 'https://www.youtube.com/watch?v=zd5Y0DaCFpU'
            width='100%'
            height='100%'
            controls={true}
          /> 
           </section>
        </div>
     </section>
  )
}

export default About