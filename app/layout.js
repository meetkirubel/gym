import Footer from '@components/Footer'
import Header from '@components/Header'
import '@style/globals.css'
import '@style/all.css'
export const metadata = {
  title: 'Power Gym',
  description: 'Power Gym Addis is a premier fitness facility located in Addis Ababa, Ethiopia  that opened in 1996 E.C. We provide a wide range of equipment, classes, and, personal training options to help our members achieve their health and fitness goals.',

}

 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className='dark'>
        <Header/>
        <main >
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
