import React from 'react';
import Header from './Header.tsx';
import GigDetails from './GigDetails.tsx';
import ConfirmationMessage from './ConfirmationMessage.tsx';
import AcceptanceButtons from './AcceptanceButtons.tsx';
import './GigConfirmation.css'; // for extra styles if necessary

const GigConfirmation: React.FC = () => {
  return (
    <main className="flex flex-col items-center bg-white pb-24">
      {/* Header section */}
      <Header />

      {/* Main content section with GigDetails and ConfirmationMessage */}
      <section className="flex items-start justify-between w-full max-w-[1105px] mt-10 px-5 max-md:flex-col max-md:gap-10">
        {/* GigDetails on the left */}
        <div className="flex-1 flex justify-start max-md:w-full">
          <GigDetails />
        </div>

        {/* Divider between GigDetails and ConfirmationMessage */}
        <div className="border-l border-black mx-4 my-14 h-[90vh] sm:h-[70vh] md:h-[400px] flex-none w-[5%] sm:w-[10%] md:w-[300px]"></div>

        {/* Confirmation Message in the middle */}
        <div className="flex-1 flex justify-start max-md:w-full"> {/* Use justify-start to align it left */}
          <ConfirmationMessage />
        </div>
      </section>
    </main>
  );
};

export default GigConfirmation;
