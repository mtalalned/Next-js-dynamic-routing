import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex gap-5'>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/contact/person">Nested Person</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default Home