import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/image/bkf_logo.jpg'

const Header = () => {
    return (
        <div classNameName='bg-red-400'>

            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className="w-24 h-24 text-white rounded-full" src={logo} alt='logo'></img>
                        <span className="ml-3 text-xl">Bharovi Kranti Family</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/' className="mr-5 hover:text-slate-900 font-bold text-xl">Home</Link>
                        <Link to='/service' className="mr-5 hover:text-slate-900 font-bold text-xl">Service</Link>
                        <Link to='/about' className="mr-5 hover:text-slate-900 font-bold text-xl">About</Link>
                        <Link to='/contact' className="mr-5 hover:text-slate-900 font-bold text-xl">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Join us
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header