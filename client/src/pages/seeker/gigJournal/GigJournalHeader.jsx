import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import Font Awesome user icon
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Header() {
  const UserId = localStorage.getItem('userId');
  return (
    <header className="bg-gray-800 border-b border-gray-700 w-full fixed top-0 left-0 shadow-lg z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-between h-auto lg:h-20 py-4">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" title="Home" className="flex items-center">
              <img 
                className="w-auto h-8 lg:h-10" 
                src="#" 
                alt="Logo" 
              />
              <h1 className="ml-2 text-4xl font-bold text-teal-500">gig</h1>
            </Link>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0 md:flex-row md:items-center md:space-x-10">
            <Link 
              to={`/gigpool/${UserId}`} 
              title="Gig Pool" 
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig pool
            </Link>

            <Link 
              to= {`/gigtracker/${UserId}`} 
              title="Gig Tracker" 
              className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig tracker
            </Link>

            <Link 
              to={`/gigjournal/${UserId}`}
              title="Gig Journal" 
              className="text-sm font-medium text-teal-500 transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70"
            >
              gig journal
            </Link>

            {/* Profile Icon */}
            <Link 
              to={`/seekerprofile/${UserId}`} 
              title="Profile" 
              className="text-white text-l ml-4"
            >
              <FaUserCircle className="w-8 h-8" />
            </Link>
          </div>
        </nav>
        <div className="text-white text-2xl mt-8 mb-4 text-left">
          <h1>Where your gig stories come together</h1>
        </div>
        <div className="text-white text-base mt-4 mb-5 text-left">
          <p>Document your hustle-every gig, every step, all in your Gig Journal.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
