import React from 'react'
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Fotter from '../components/Fotter'

const Home = () => {
  return (
    <>
    <Hero />
    <FeatureSection/>
    <Banner />
    <Testimonial/>
    <Newsletter/>
    <Fotter/>
    </>
  )
}

export default Home