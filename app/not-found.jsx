import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: '404 Page is not Found.',
  description: 'We could not find the page you were looking for.',
}

const NotFound = () => {
  return (
    <main style={{backgroundColor:'var(--bg-2)',height:'100vh',position:'relative',zIndex:'1001'}}>
        <div className="containe text-centerr" style={{ position:'absolute',top:'45%',left:'50%',transform:'translate(-50%,-50%)',width:'95%'}}>
        <h2 className='text-center text-yellow-500'>There was a problem.</h2>
        <p className='text-center '>We could not find the page you were looking for.</p>
        <p className='text-center '>Go back to the <Link href='/'> Home</Link>.</p>
        <button style={{ position:'absolute',top:'110%',left:'50%',transform:'translate(-50%,-50%)'}}  className='my-4 btn bg-yellow-500 hover:bg-yellow-200 font-bold py-1 px-2 rounded'><Link  href='/'>Back To Home</Link></button>

        </div>

    </main>
  )
}

export default NotFound