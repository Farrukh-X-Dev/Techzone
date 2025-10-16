import React from 'react'
import Hero from '../components/Hero'
import FAQs from '../components/FAQs '

const Home = () => {
  document.title = " Techzone Learning - Home "
  return (
    <>
      <Hero />
      <FAQs />
    </>
  )
}

export default Home