import React from 'react'
import Hero from '../components/Hero'
import FAQs from '../components/FAQs '
import Reviews from '../components/Reviews'

const Home = () => {
  document.title = " Techzone Learning - Home "
  return (
    <>
      <Hero />
      <Reviews />
      <FAQs />
    </>
  )
}

export default Home