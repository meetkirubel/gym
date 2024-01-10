import Link from 'next/link'
import React from 'react'

const CallTo = () => {
  return (
    <section className='full__container call__to__action'>
        <div className="call__to__actioncontainer">
            <span>CALL US TODAY</span>
            <h2>+2519-02-08-08-08</h2>
            <button className='btn bg-yellow-500 hover:bg-yellow-200 font-bold py-2 px-4 rounded'><Link href='/contact'>GET INFO</Link></button>
        </div>
    </section>
  )
}

export default CallTo