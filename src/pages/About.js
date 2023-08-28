import React from 'react'
import brvkm from '../assets/image/charity1.jpg'

const About = () => {
  return (
    <div>
      <section class="text-gray-800 bg-red-300 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Bhartiya Rojgar Vikas Kranti Manch</h1>
      <p class="mb-8 leading-relaxed">A beacon of hope and progress. 🌟 Our charitable trust is dedicated to addressing unemployment head-on. With unwavering commitment, we provide gainful employment, adhering to government regulations. We illuminate young minds through education, uplift women by enabling work-from-home opportunities, and empower girls with tele-calling roles. Not stopping there, we warm hearts by distributing jackets in winter and T-shirts in summer to those in need.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={brvkm} />
    </div>
  </div>
</section>
    </div>
  )
}

export default About