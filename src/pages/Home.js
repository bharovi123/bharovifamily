import React from 'react'
import { useNavigate } from 'react-router-dom'
import vCall from '../assets/image/v-call.jpg'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-red-200'>


            <div className="w-full bg-cover bg-center" style={{ height: "32rem", backgroundImage: "url(https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)" }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Find your patner</h1>
                        <button onClick={() => navigate('/contact')} className="flex mx-auto mt-16 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 border-0 py-2 px-8  rounded text-lg">Register</button>
                    </div>
                </div>
            </div>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Welcome to Bharovi Kranti Family</h2>
                    <h2 className="sm:text-3xl text-xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Your Path to Lasting Connections and Happiness</h2>
                    <div className="md:w-3/5 md:pl-6">
                        <p className="leading-relaxed text-base">At Bharovi Kranti Family, we understand that finding the right partner and building a strong, fulfilling relationship is a journey that requires careful consideration, empathy, and support. We are dedicated to being your trusted companion on this remarkable journey, guiding you through the complexities of relationships and helping you create a bond that stands the test of time.</p>

                    </div>
                </div>
            </section>

            
            <div className="w-full bg-cover bg-center" style={{ height: "18rem", backgroundImage: "url(https://www.choruscallaustralia.com.au/wp-content/uploads/2018/11/best-practice-video-call.jpg)" }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <button onClick={() => navigate('/contact')} className="flex mx-auto mt-16 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 border-0 py-2 px-8  rounded text-lg">Connect With Our Team</button>
                    </div>
                </div>
            </div>


            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Why Choose Us?</h1>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> Our advanced matching algorithm considers your preferences and values to connect you with potential partners who share your outlook on life.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">1. Meaningful Connections</h2>
                                <p className="leading-relaxed text-base">We believe that a successful relationship is built on shared values, interests, and aspirations. Our advanced matching algorithm considers these key factors, ensuring that your potential partners align with your vision of a fulfilling partnership.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">2. Comprehensive Support</h2>
                                <p className="leading-relaxed text-base">Our commitment doesn't end at matchmaking. We are here for you every step of the way – before, during, and after marriage. From offering advice on communication and conflict resolution to providing a safe space for discussing concerns, we are your dedicated support system.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">3. Personalized Experience</h2>
                                <p className="leading-relaxed text-base">No two individuals are the same, and we recognize the importance of tailoring our services to your unique preferences. Our personalized approach ensures that your journey is guided by your choices and desires.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">4. Privacy and Security</h2>
                                <p className="leading-relaxed text-base">We prioritize your privacy and security, employing the latest technology to safeguard your personal information. Your journey with us is confidential, allowing you to explore connections with peace of mind.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">5. Expert Guidance</h2>
                                <p className="leading-relaxed text-base">Our team of experienced relationship counselors and experts is here to offer valuable insights and guidance. Whether you're navigating the early stages of a relationship or seeking advice on strengthening your bond, our experts are just a message away.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">6. Celebrating Diversity</h2>
                                <p className="leading-relaxed text-base">Love knows no boundaries, and we embrace diversity in all its forms. Our platform is open to individuals of all backgrounds, orientations, and walks of life. We believe that every connection has the potential to bring joy and understanding.</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate('/about')} className="flex mx-auto mt-16 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 border-0 py-2 px-8  rounded text-lg">Terms & Conditions</button>
                </div>
            </section>
            <div className="w-full bg-cover bg-center" style={{ height: "15rem", backgroundImage: 'url(https://www.conferencecalling.com/static/b6a389200ca0dfb95fe749cb1f832764/8ffd9/vc-hero-creative.jpg)' }}>
                <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">Join Our Community Today</h1>
                    </div>
                </div>
            </div>

            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Mission</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our mission is to create an environment where love and companionship flourish. Begin your journey towards a happier, more fulfilling life today. Join Bharovi Kranti Family and discover the possibilities that await.</p>
    </div>
   
  </div>
</section>
        </div>
    )
}

export default Home