"use client";

import Link from "next/link";
import { useState } from "react";



const Membership = () => {
   
   
   const [active1, setActive1] = useState("plan__card");
   const [active2, setActive2] = useState("plan__card active");
   const [active3, setActive3] = useState("plan__card");
   const [activeP1, setActiveP1] = useState("plan__container");
   const [activeP2, setActiveP2] = useState("plan__container plan__container__active");
   const [activeP3, setActiveP3] = useState("plan__container");
   const active = (fun,funP)=>{
         setActive1("plan__card")
         setActive2("plan__card")
         setActive3("plan__card")
         fun("plan__card active")
         setActiveP1("plan__container")
         setActiveP2("plan__container")
         setActiveP3("plan__container")
         funP("plan__container plan__container__active")}

  return (
     <section className="dark-section">
        <div className="container text-center">
             <div className="title__header__center Membership">
                <span className="top">GOOD DEAL</span>
                <h2>Membership Plans</h2>
              </div>
              <div className="card__container" >
              <ul className={active1} onClick={()=>active(setActive1,setActiveP1)}>
                     <h2 className="price">3,200<span>Birr/Month</span></h2>
                     <div className={activeP1} >
                     <span className="plan">1 Month Membership</span>
                     </div>
                     <li className="service">Any Time</li>
                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
               </ul> 
               
                    
              <ul className={active2} onClick={()=>active(setActive2,setActiveP2)}>
                     <h2 className="price">2,880<span>Birr/Month</span></h2>
                     <div className={activeP2} >
                     <span >6 Months Membership</span>
                     </div>
                     
                     <li className="service">Any Time</li>
                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
               </ul> 

              <ul className={active3} onClick={()=>active(setActive3,setActiveP3)}>
                     <h2 className="price">2,720<span>Birr/Month</span></h2>
                     <div className={activeP3} >
                     <span className="plan">1 Year Membership</span>
                     </div>

                     <li className="service">Any Time</li>
                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>

               </ul> 


              </div>
              <Link href="/price" className="btn bg-yellow-500 hover:bg-yellow-400 font-bold py-2 px-4 rounded">See More</Link>
        </div>
     </section>
  )
}

export default Membership