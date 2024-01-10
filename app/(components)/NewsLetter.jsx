import React from 'react'
import {BiTimeFive ,BiUser ,BiCommentDots} from 'react-icons/bi'
import Image from 'next/image'

import img1 from "@public/news/img1.jpg"
import img2 from "@public/news/img2.jpg"
import img3 from "@public/news/img3.jpg"

const NewsLetter = () => {
  return (
    <section className="dark-section">
        <div className="container newsleter__container">
             <div className="title__header__center NewsLetter">
                <span className="top">GET UPDATE</span>
                <h2>Our Latest News</h2>
              </div>

              <div className="card__container">

                
              <div className="news__card">
                    <Image
                        src={img1}
                        alt="Power Gym Addis"
                        width="150px"
                        height="150px"
                        loading='lazy'
                        placeholder="blur"
                     />
                    <div className="text__container">
                    <span>BODY BULDING</span>
                    <h3 className="price">How To be in Good Health</h3>
                    <p>To be in good health, you need to eat a healthy diet, exercise regularly, and get enough sleep.</p>
                    <div className="news__reaction">
                        <span><BiTimeFive/>1d</span>
                        <span><BiUser/> Admin</span>
                        <span><BiCommentDots/>34</span>
                    </div>
                    </div>
               </div> 
               
              
              <div className="news__card">
                    <Image
                        src={img2}
                        alt="Power Gym Addis"
                        width="150px"
                        height="150px"
                        loading='lazy'
                        placeholder="blur"
                     />
                    <div className="text__container">
                    <span>BODY BULDING</span>
                    <h3 className="price">Gym With Your Friends</h3>
                    <p>Working out with friends is a great way to stay motivated and accountable. It can also make exercise more fun and enjoyable. Here are some of the benefits of working out with friends:</p>
                    <div className="news__reaction">
                        <span><BiTimeFive/>1d</span>
                        <span><BiUser/> Admin</span>
                        <span><BiCommentDots/>34</span>
                    </div>
                    </div>
               </div> 
               
              
              <div className="news__card">
                    <Image
                        src={img3}
                        alt="Power Gym Addis"
                        width="150px"
                        height="150px"
                        loading='lazy'
                        placeholder="blur"
                     />
                    <div className="text__container">
                    <span>BODY BULDING</span>
                    <h3 className="price">Weight Lift</h3>
                    <p>Weight lifting, also known as resistance training or strength training, is the practice of contracting your muscles against an external resistance with the goal of increasing the strength and size of your muscles. Weight lifting can be done using free weights, such as dumbbells and barbells, or weight machines.</p>
                    <div className="news__reaction">
                        <span><BiTimeFive/>1d</span>
                        <span><BiUser/> Admin</span>
                        <span><BiCommentDots/>34</span>
                    </div>
                    </div>
               </div> 
               
              


              </div>

        </div>
     </section>
  )
}

export default NewsLetter