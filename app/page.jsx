import '@style/home.css'
import About from './(components)/About'
import Testimonial from './(components)/Testimonal'
import Gallery from './(components)/Gallery'
import Membership from './(components)/Mambership'
import BMIS from './(components)/BMIS'
import Service from './(components)/Service'
import CallTo from './(components)/CallTo'
import NewsLetter from './(components)/NewsLetter'
import Hero from './(components)/Hero'


const Home = () => {
  return (
     <>
     <Hero/>
     <About/>
     <Testimonial/>
     <Gallery/>
     <Membership/>
     <BMIS/>
     <Service/>
     <NewsLetter/>
      <CallTo/>
     </>
  )
}

export default Home