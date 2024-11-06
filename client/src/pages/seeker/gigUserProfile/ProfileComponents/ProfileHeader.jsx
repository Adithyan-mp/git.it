import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function ProfileHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 min-w-screen top-0  shadow-lg z-50">
      <div className="px-4 max-w-full sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-between h-auto lg:h-20 py-4">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" title="Home" className="flex items-center">
            <img 
                className="w-auto h-8 lg:h-10" 
                src="#" // Replace with your logo URL
                alt="Logo" 
              />
              <h1 className="ml-2 text-4xl font-bold text-teal-500">gig</h1>
            </a>
          </div>
        </nav>
        <div className="text-white text-2xl mt-3 mb-4 text-right">
          <h1>Welcome to Your Gig Profile!</h1>
        </div>
        <div className="text-white text-base mt-4 mb-5 text-right">
          <p>Here’s where you can manage your account, update your details, and track your gig activity.</p>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;