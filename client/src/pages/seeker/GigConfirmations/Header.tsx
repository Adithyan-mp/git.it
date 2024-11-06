import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col px-9 pt-6 pb-28 w-full text-4xl font-semibold text-white bg-gray-800 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d9854b16e9eb08a5da0184908137cf3396167af3e9ea3b0625c79a6df47e637?apiKey=2b8e8d0d538b4a70b2c4e5c985b10841&" className="object-contain self-end aspect-[1.1] w-[57px]" alt="Company logo" />
      <h1 className="self-start mt-8 mb-0 max-md:mb-2.5 max-md:max-w-full">
        Congrats! You've nailed it! Your next gig is locked in—time to shine!
      </h1>
    </header>
  );
};

export default Header;