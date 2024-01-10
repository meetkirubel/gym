
import '@style/home.css'
import '@style/about.css'
import Link from 'next/link';
export const metadata = {
   title: 'Price - Power Gym Addis',
   description: 'Power Gym Addis Membership Plans.'
 }
const Price = () => {

    const func = (m,m2,a,a2)=>{
        var mt,tt,st,yt ;
        var mt2,tt2,st2,yt2 ;

        var ma,ta,sa,ya ;
        var ma2,ta2,sa2,ya2 ;

        mt = m
        tt = m-m*.05
        st = m-m*.1
        yt = m-m*.15

        mt2 = m2
        tt2 = m2-m2*.05
        st2 = m2-m2*.1
        yt2 = m2-m2*.15

        ma = a
        ta = a-m*.05
        sa = a-m*.1
        ya = a-m*.15

        ma2 = a2
        ta2 = a2-a2*.05
        sa2 = a2-a2*.1
        ya2 = a2-a2*.15
        var tot = [[[mt,mt2],[ma,ma2]],[[tt,tt2],[ta,ta2]],[[st,st2],[sa,sa2]],[[yt,yt2],[ya,ya2]]];

     return  tot 
    
    }
    var prices = func(2000,2800,2500,3200)
    var time = ['1 Month','3 Month','6 Month','1 year']



  return (
    <>
          <section>
        <div className="container__flex full__container__full price__hero">
        <div className="h1__container">
        <div className="title__header__center Membership">
                <span className="top">PRICING TABLES</span>
                <h1>Membership Plans</h1>
              </div>
              </div>
        </div>
      </section>




      <section>
        <div className="container text-center">
                    
     

                {
                    prices.map((item,key)=>{
                            return (
                                <div className="card__container__price" >

                                            <div className="price__plan__card"> 
                                            <h2>{time[key]}</h2>
                                            <h3 className="price">12:00-8:00</h3>
                                            <div className="card__body">
                                            <div className="card__left card">
                                               <h4>{item[0][0]}/Birr</h4>
                       
                                            <li className="service">With Out Spa</li>
                                            <li className="service">Fettnece Orentetion</li>
                                            <li className="service">Full Gym Access</li>
                                            <Link href="/contact" className="order">Contact</Link>
                                            </div>
                                            <div className="card__right card">
                                            <h4>{item[0][1]}/Birr</h4>
                       
                                            <li className="service">With Spa</li>
                                            <li className="service">Fettnece Orentetion</li>
                                            <li className="service">Full Gym Access</li>
                                            <Link href="/contact" className="order">Contact</Link>
                                            </div>
                                            </div>  
                                      </div>

                                            <div className="price__plan__card"> 
                                            <h2>{time[key]}</h2>
                                            <h3 className="price">Any Time</h3>
                                            <div className="card__body">
                                            <div className="card__left card">
                                               <h4>{item[1][0]}/Birr</h4>
                       
                                            <li className="service">With Out Spa</li>
                                            <li className="service">Fettnece Orentetion</li>
                                            <li className="service">Full Gym Access</li>
                                            <Link href="/contact" className="order">Contact</Link>
                                            </div>
                                            <div className="card__right card">
                                            <h4>{item[1][1]}/Birr</h4>
                       
                                            <li className="service">With Spa</li>
                                            <li className="service">Fettnece Orentetion</li>
                                            <li className="service">Full Gym Access</li>
                                            <Link href="/contact" className="order">Contact</Link>
                                            </div>
                                            </div>  
                                      </div> 
                                       
                              
              </div>

                            )

                    })
                }
                 

{/* 

              
      <div className="card__container__price" >


              <div className="price__plan__card"> 
                     <h2>3 Month</h2>
                     <h3 className="price">12:00-8:00</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>2100/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>2140/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
               </div> 

              <div className="price__plan__card"> 
                     <h2>3 Month</h2>
                     <h3 className="price">Any Time</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>2600/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>2660/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
               </div> 
              </div>



      <div className="card__container__price" >


              <div className="price__plan__card"> 
                     <h2>1 Month</h2>
                     <h3 className="price">12:00-8:00</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
               </div> 

              <div className="price__plan__card"> 
                     <h2>1 Month</h2>
                     <h3 className="price">Any Time</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
               </div> 
              </div>



      <div className="card__container__price" >


              <div className="price__plan__card"> 
                     <h2>1 Month</h2>
                     <h3 className="price">12:00-8:00</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
               </div> 

              <div className="price__plan__card"> 
                     <h2>1 Month</h2>
                     <h3 className="price">Any Time</h3>
                     <div className="card__body">
                     <div className="card__left card">
                        <h4>/Birr</h4>

                     <li className="service">With Out Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     <div className="card__right card">
                     <h4>/Birr</h4>

                     <li className="service">With Spa</li>
                     <li className="service">Fettnece Orentetion</li>
                     <li className="service">Full Gym Access</li>
                     <Link href="/contact" className="order">Contact</Link>
                     </div>
                     </div>  
              </div>
               </div>  */}




              </div>
     </section>
      
    </>
  )
}

export default Price