import React from 'react';

const GigDetails: React.FC = () => {
  return (
    <div className="text-left ml-1"> {/* Optional margin to move text left */}
      <section className="flex flex-col items-start my-auto text-xl text-black mt-20"> {/* Add mt-8 for spacing */}
        <p>Date: <span className="font-semibold">20 Sept</span></p>
        <p className="mt-10">
          Reporting time:<br />
          <span className="font-semibold">10:00 am</span>
        </p>
        <p className="self-stretch mt-11 max-md:mt-10">
          Location:<br />
          <span className="font-semibold">Lulu hypermarket, Edapally</span>
        </p>
        <p className="mt-11 max-md:mt-10">
          Contact: <span className="font-semibold">974******89</span>
        </p>
      </section>
    </div>
  );
};

export default GigDetails;
