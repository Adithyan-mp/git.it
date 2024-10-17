import React from "react";
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="flex flex-col pt-3 pr-3.5 pb-8 pl-11 w-full bg-gray-800 max-md:pl-5 max-md:max-w-full">
      <nav className="flex justify-end gap-10 self-end max-w-full w-[976px] items-center">
        <div className="flex gap-10 items-center text-xl leading-tight text-white">
          <a href="#" className="z-10 pt-0 pb-0.5 font-semibold text-teal-500">Post a gig !</a>
          <a href="#" className="z-10 pt-0 pb-0.5 font-medium">Your gigs</a>
        </div>
        <a href="#" title="Profile" className="text-white text-l">
          <FaUserCircle className="w-8 h-8" />
        </a>
      </nav>
      <section className="flex flex-col self-start mt-12 leading-tight text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="self-start text-4xl max-md:max-w-full">Share your opportunities</h1>
        <p className="mt-5 text-xl max-md:max-w-full">
          Got a gig to offer? Post it here and connect with eager candidates ready to take on the challenge
        </p>
      </section>
    </header>
  );
}

export default Header;